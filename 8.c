#include <stdio.h>
#include <string.h>
/*char pilha[2][10] = {"1"};
char *(pilhaPonteiro)[10] = pilha;
int atualPosicao;
int *atualponteiro = &atualPosicao;
void historico()
{
    for (int i = sizeof(pilha); 0 < i; i--)
    {
        printf("paginas visitadas %s\n", pilha[i]);
    }
};
void NovaPagina(char *pagina)
{
    int paginaArraytamanho = strlen(pagina) - 1;
    printf("%d",paginaArraytamanho,'oioi');
    int tamanho = sizeof(pilha - 1);
    printf("tamanho %d", tamanho);
    char arraytemp[tamanho][10];
    for (int i = 0; i < tamanho - 1; i++)
    {int ptamanho=sizeof(pilha[i]);
        strcpy(arraytemp[i], pilha[i]);
        printf("%s",arraytemp[i]);
    };
    strcpy(arraytemp[tamanho],pagina);
    *atualponteiro = tamanho - 1;
    *pilhaPonteiro = arraytemp;
    for (int i = 0; i < tamanho - 1; i++)
    {
        printf("%s", arraytemp[i]);
    };
    printf("\nfeito\n");
};
void paginaAnterior()
{
    int tamanho = sizeof(pilha - 1) - 1;
    int parte_nao_alterada = sizeof(pilha) - 3;
    char arraytemp[tamanho][10];
    for (int i = 0; i < parte_nao_alterada; i++)
    {
        arraytemp[i] = pilha[i];
    };
    arraytemp[tamanho - 2] = pilha[tamanho - 1];
    arraytemp[tamanho - 1] = pilha[tamanho - 2];
    printf("feito");
    printf("%s", arraytemp);
};
void Atual() { printf("%s", pilha[atualPosicao]); };
void main(void)
{
    printf("bem vindo ao sistema de histórico\n");
    NovaPagina("ai toma");
    historico();
}*/
#define MAX_PAGINAS 2
#define TAM_PAGINA 10

char pilha[MAX_PAGINAS][TAM_PAGINA] = {"1"};
int atualPosicao = 0;

void historico(void)
{
    for (int i = 0; i < MAX_PAGINAS; i++)
    {
        printf("pagina %d: %s\n", i, pilha[i]);
    }
}

void NovaPagina(const char *pagina)
{
    if (atualPosicao < MAX_PAGINAS - 1)
    {
        atualPosicao++;
        strcpy(pilha[atualPosicao], pagina);
    }
    else
    {
        printf("Pilha cheia\n");
    }
}

void paginaAnterior(void)
{
    if (atualPosicao > 0)
    {
        atualPosicao--;
    }
}

void Atual(void)
{
    printf("%s\n", pilha[atualPosicao]);
}

int main(void)
{
    printf("bem vindo ao sistema de histórico\n");
    NovaPagina("ai toma");
    historico();
    Atual();
    paginaAnterior();
    Atual();

    return 0;
}