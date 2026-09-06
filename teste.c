#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int vetor_t_parada(char *string){
    int t2=strlen(string)+1;
    printf("%s\n",string);
    return t2;
};
void manipularstring2(char *string){
    printf("\noi");
    int t2=strlen(string);
    char temp[t2];
    strcpy(temp,string);
    printf("\n%s",temp);
    printf("\n%d",t2);
};
void main(void){
    system("clear");
int a=vetor_t_parada("bo");
printf("%d",a);
manipularstring2("teste");
}