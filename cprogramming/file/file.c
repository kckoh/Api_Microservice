
#include <stdio.h>

int main() {
   FILE *fp;

//    fp = fopen("tmp/test.txt", "w+");
//    fprintf(fp, "This is testing for fprintf...\n");
//    fputs("This is testing for fputs...\n", fp);
//    fclose(fp);

   char buff[255];

   fp = fopen("/tmp/test.txt", "r");
//    fscanf(fp, "%s", buff); //reads only a string before a space
//    printf("1 : %s\n", buff );

//    fgets(buff, 255, (FILE*)fp); //reads until the \n
//    printf("2: %s\n", buff );

//    fgets(buff, 255, (FILE*)fp);
//    printf("3: %s\n", buff );
//    fclose(fp);

   while ( fgets(buff, 255, (FILE*)fp) != NULL) {
       printf("%s", buff);
}

   return 0;
}