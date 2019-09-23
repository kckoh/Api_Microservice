#include <stdio.h>
#include <string.h>

struct {
   unsigned int age: 2;
   unsigned int lim: 2;

} Age;

int main( ) {

   Age.age = 4;
   Age.lim = 1;
   printf( "Sizeof( Age ) : %d\n", sizeof(Age) );
   printf( "Age.age : %d\n", Age.age );

   Age.age = 3;
   printf( "Age.age : %d\n", Age.age );

   Age.age = 4;
   printf( "Age.age : %d\n", Age.age );

   return 0;
}