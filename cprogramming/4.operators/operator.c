#include <stdio.h>

void bin(unsigned n)
{
    /* step 1 */
    if (n > 1)
        bin(n/2);

    /* step 2 */
    printf("%d", n % 2);
} 

int main(){
    printf("Hello\n");
    /* use 0b and the binary number to store binary number */
    int a = 0b0011;
    int b = 13;
    /* and, or xor one's complement */
    printf("%d\n", a);
    return 0;
}

