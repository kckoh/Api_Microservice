#include <stdio.h>
#include <string.h>

int main(){
    char strings[] = "hello";
    int len = strlen(strings);
    printf("Greeting message: %s length: %d   \n ", strings, len );
    for( int i = 0; i < len; i++){
        printf("%d", i);
    }
    return 0;
}