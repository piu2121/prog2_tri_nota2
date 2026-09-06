#include <stdio.h>
#include <string.h>
#include <stdlib.h>
void historico(int plength, char **pilha)
{
    if (plength == 0)
    {
        printf("ta vazio a pilha\n");
        printf("digite qualquer caracter para voltar no menu principal\n");
        char a[8];
        scanf("%s", &a);
        return;
    }
    for (int i = 0; i < plength; i++)
    {
        printf("pagina %d: %s\n", i, pilha[i]);
    }
    printf("digite qualquer caracter para voltar no menu principal\n");
    char a[8];
    scanf("%s", &a);
}
void NovaPagina(int *plength, char ***pilha)
{
    char tempMain[100];
    printf("página: ");
    scanf("%s", tempMain);
    char **temp = realloc(*pilha, (1 + *plength) * sizeof(char *));
    if (temp == NULL)
    {
        fprintf(stderr, "deu rui ao tentar o reallo na vaiavel temp");
        return;
    }
    *pilha = temp;
    (*pilha)[*plength] = malloc(strlen(tempMain) + 1);
    if ((*pilha)[*plength] == NULL)
    {
        fprintf(stderr, "Erro ao alocar string\n");

        return;
    }
    strcpy((*pilha)[*plength], tempMain);
    (*plength)++;
}

void paginaAnterior(int plength, char ***pilha)
{printf("quantidade de posições na pilha:%d\n",plength);
    int pagina;
    printf("digite a posição da página que deseja voltar: ");
    scanf("%d",&pagina);
    if (plength > 1)
    {
        char anterior[strlen(*pilha[pagina])+1];
        strcpy(anterior, (*pilha)[pagina]);
        realloc((*pilha)[pagina],strlen((*pilha)[plength-1])+1);
        strcpy((*pilha)[pagina],(*pilha)[plength-1]);
        realloc((*pilha)[plength - 1],strlen(anterior)+1);
        strcpy((*pilha)[plength - 1],anterior);
        printf("%s\n", anterior);
        printf("digite qualquer caracter para voltar no menu principal\n");
        char a[8];
        scanf("%7s",a);
    }
    else
    {
        fprintf(stderr, "a pilha precisa de nó minimo duas páginas só tem %d\n", plength);
        printf("digite qualquer caracter para voltar no menu principal\n");
        char a[8];
        scanf("%s", &a);
    }
}
void Atual(int plength, char **pilha)
{
    if (plength <= 0)
    {
        fprintf(stderr, " não há nada para mostrar pois a pilha está vazia\n");
        printf("digite qualquer caracter para voltar no menu principal\n");
        char a[8];
        scanf("%s", &a);
    }
    else
    {
        printf("%s\n", pilha[plength - 1]);
        printf("digite qualquer caracter para voltar no menu principal\n");
        char a[8];
        scanf("%s", &a);
    }
}
int main(void)
{
    char **pilha = NULL;
    int tamanhop = 0;
    int f;
    while (1 != 0)
    {
        system("clear");
        printf("bem vindo ao sistema de histórico\n");
        printf("as funções são\nnova página: 1\npágina atual: 2\npágina anterior: 3\nhistorico: 4\nsair: 0\n");
        printf("digite qual função gostaria de usar: exemplo 4,igual histórico\n");
        scanf("%d", &f);
        if (f == 1)
        {
            NovaPagina(&tamanhop, &pilha);
        }
        else if (f == 2)
        {
            Atual(tamanhop, pilha);
        }
        else if (f == 3)
        {
            paginaAnterior(tamanhop, &pilha);
        }
        else if (f == 4)
        {
            historico(tamanhop, pilha);
        }
        else if (f == 0)
        {
            return 0;
        }
        else
        {
            fprintf(stderr, "error, comando não reconhecido: %d\n", f);
            return 0;
        }
    }
    return 0;
}