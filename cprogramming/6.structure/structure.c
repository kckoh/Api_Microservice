#include <stdio.h>
#include <string.h>
#include <stdbool.h>

struct Person {
   char  name[50];
   char hobby[50];
   bool rich;
};

int main( ) {

   struct Person person1;        /* Declare Book1 of type Book */

   /* perso1 specification */
   strcpy( person1.name, "Andrew Yang");
   strcpy(person1.hobby, "Soccer");
   person1.rich = false;

   /* print person1 info */
   printf( "Person1 name : %s\n", person1.name);
   printf( "Person1 hobby : %s\n", person1.hobby);
   printf( "Person1 is rich?  : %s\n", person1.rich ? "true":"false");
   printf("%lu", sizeof(person1));

   return 0;
}