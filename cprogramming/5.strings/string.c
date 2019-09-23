#include <stdio.h>
#include <string.h>

int main(){
    char strings[] = "hello";
    int len = strlen(strings);
    char reverse[] = "";
    printf("Greeting message: %s length: %d address: %p   \n ", strings, len, strings );
    /* reverse the string */
    for( int i = len-1; i > -1 ; i--){
            printf("%c", *(strings+i));
    }
    printf("\n");
    return 0;
}