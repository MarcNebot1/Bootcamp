import java.util.Scanner;
import java.util.Random;
public class principal {
//ejercicio12
	 final static void categoriaytipodeclima(double temp) {
		 if (( temp < 5)) {
	        System.out.println("clima frio y categoria polar");
	        } else if (temp >= 5 && temp < 10) {
	        System.out.println("clima frio y alta montaña");
	        } else if (temp >= 10 && temp < 13.5) {
	        System.out.println("clima templado y oceanico");    
	        } else if (temp >= 13.5 && temp < 16.5) {
	        System.out.println("clima templado y mediterraneo");
	        } else if (temp >= 16.5 && temp < 20) {
		    System.out.println("clima templado y continental");   
	        } else if (temp >= 20 && temp < 23.5) {
		    System.out.println("clima calido y ecuatorial	");   
	        } else if (temp >= 23.5 && temp < 26.5) {
		    System.out.println("clima calido y tropical");   
	        } else if (temp >= 26.5) {
		    System.out.println("clima calido y desertico");   
	        }
	 }
	 
	 //ejercicio16
	 
	 final static String javaonull(String string) {
		if ("java".equals(string)) {
			return(string);
		}else {
				return(null);
			}		 
	 }
	 final static boolean login(String usuari, int contra) {
		 boolean bol=true;
		 if ("admin".equals(usuari) && (contra==1234)) {
				return(bol==true);
	 }else{ 
		 return(bol==false);
	 }
	 }
	  public static boolean parOImpar() {
		  boolean bole=true;
	 Random random = new Random();
     int numero = random.nextInt(100);   
     if (numero % 2 == 0) {
         return (bole==true);
     } else {
    	 return (bole==false);
     }
 }
	 
	//ejercicio1
	public static void main(String[] args) {
		System.out.println("Hello\nworld");
		System.out.println("Hello\tworld");
		System.out.println("Hello\\world");
		System.out.println("Hello\"world");
		System.out.println("Hello\'world");
		System.out.println("Hello\rworld");
		System.out.println("Hello\bworld");
		
	//ejercicio2
	    
		int num1=10; //variable int numero 1
		int num2=20; //variable int numero 2
		int suma=num1+num2; //variable suma y funcion sumar de los dos num1 num2
		System.out.println("\n"+suma); // impirimir por pantalla el resultado suma
	
	//ejercicio3
		boolean cierto=true; //logico
		char letra='a';  //caracter
		byte b= 123;  //numero entero
		short s=12345; // ""
		int in=1234568979;   // ""
		long l=1231111111;  // ""
		float f=12.123f; // numero real
		double d=1222222.3;// numero real
		final int number=3; //numero constante
		
		System.out.println("\n"+cierto);
		System.out.println(letra);
		System.out.println(b);
		System.out.println(s);
		System.out.println(in);
		System.out.println(l);
		System.out.println(f);
		System.out.println(d);
		System.out.println(number);
		
		//Ejercicio 4
	    final int LIMITE = 5;
	    final int LIMITE1 = 25;
	    final int LIMITE2 = 10000;
	    final int LIMITE3 = 20000;
	    byte pos=0;
	    short pos1=0;
	    int pos2=0;
	    long pos3=0;
	    System.out.println("\ndesborda cuando vuelve a 0");
	    for (int i = 0; i < 5	; i++) { 
            pos = (byte) ((pos + 1) % LIMITE);  
            if(pos==0) {
            System.out.println("Posición actual: " + pos);
            }
        }
	    for (int i = 0; i < 25; i++) { 
            pos1 = (short) ((pos1 + 1) % LIMITE1); 
            if(pos1==0) {
            System.out.println("Posición actual: " + pos1);
            }
        }
	    for (int i = 0; i < 10000; i++) { 
            pos2 = (pos2 + 1) % LIMITE2; 
            if(pos2==0) {
            System.out.println("Posición actual: " + pos2);
            }
        }
	    for (int i = 0; i <20000; i++) { 
            pos3 = (long) ((pos3 + 1) % LIMITE3); 
            if(pos3==0) {
            System.out.println("Posición actual: " + pos3);
            }
        }
	    
	    //Ejercicio5
	    //final: Hace que la variable sea inmutable; una vez asignado el valor, no se puede cambiar.
	    //static: Si declaras las constantes como static, podrás acceder a ellas sin necesidad de crear una instancia de la clase. Esto es común en constantes de clase.
	    //Nombres en mayúsculas: Siguiendo la convención de Java, los nombres de las constantes se escriben en mayúsculas.

	    //Ejercicio6
	    String nombre="Marc";
	    String apellido="Nebot Muro";
	    String calle="Arquitecte ubach 20c";
	    String municipio="Salou";
	    int codigopostal=43840;
	    String sexo="machomen";
	    String correo="newgate3211@gmail.com";
	    System.out.println("\nHola em dic "+nombre+" "+apellido+ " visc al carrer "+calle+
	    		"\ny el poble "+municipio+" el meu codi postal es: "+codigopostal+"\nsoc un "+sexo+" i el meu correu es: "+correo);
	
	    //Ejercicio7
	    int resultado=10-5;
	    int resultado1=55+45;
	    int resultado2=3-6;
	    int resultado3=5*5;
	    int resultado4=25/7;
	    double resultado5=25/7;
	    int resultado6=25%4;
	    
	    System.out.println("\nResultados: " + resultado+" "+resultado1+" "+resultado2+" "+resultado3+" "+resultado4+" "+resultado5+" "+resultado6);
	    
	    
	    //Ejercicio8
	    int value=25; 
	    value+=5;     //suma combinada
	    value-=15;    //resta combinada
	    value*=2;     //multi combinada
	    value/=2;
	    value%=3;
	    
	    System.out.println("\nResultado final: " + value+ "\n");
	    
	    
	   //Ejercicio9
	    int nume1=1,nume2=2,nume3=3,nume4=2;
	   
	    System.out.println(nume4==nume2);
	    System.out.println(nume2==nume3);
	    System.out.println(nume1!=nume3);
	    System.out.println(nume2!=nume2);
	    System.out.println(nume4<nume2);
	    System.out.println(nume3<nume1);
	    System.out.println(nume1>nume3);
	    System.out.println(nume2>nume4);
	    System.out.println(nume2>nume3);
	    System.out.println(nume2<=nume3);
	    System.out.println(nume2<=nume4);
	    System.out.println(nume2<=nume1);
	    System.out.println(nume1>=nume2);
	    System.out.println(nume2>=nume1);
	    System.out.println(nume2>=nume2);
	
	    //Ejercicio 10  
	   boolean bool1=true,bool2=false,bool3=false,bool4=true;
	  
	   System.out.println();
	   System.out.println(bool1==!bool2);
	   System.out.println(bool2==!bool3);
	   
	   //Ejercicio11
	   //apartado1
	   int numero=2;
	   boolean ciertoo;
	  
	   ciertoo=(numero%2==0);
	   System.out.println();
	   System.out.println(ciertoo+" es par");
	   ciertoo=(numero%2!=0);
	   System.out.println(ciertoo+" es impar");
	   
	   //apartado2
	   boolean esBlanco = Math.random() < 0.5;
	    if (esBlanco) {
            System.out.println("\nblanco");
        } else {
            System.out.println("\nnegro");
        }
	    
	    //Ejercicio12
	    //apartado1
	    int numeroAleatorio = (Math.random() < 0.5) ? 1 : 2;
	  

	    boolean verdadero;
	    
	    if (numeroAleatorio==1) {
	    	verdadero=true;
            System.out.println("\nrojo");
        }  
	    if (numeroAleatorio==2) {
	    	verdadero=false;
            System.out.println("\nnegro");
        } 
	    
	    if (numeroAleatorio==1) {
	    	verdadero=true;
            System.out.println("\nrojo");
        } else {
        	verdadero=false;
            System.out.println("\nnegro");
        }
	    
	    int numeroAleatorioternario = (Math.random() < 1.0 / 3) ? 1 :
            (Math.random() < 2.0 / 3) ? 2 : 3;
	    
	    if (numeroAleatorio==1) {
	    	verdadero=true;
            System.out.println("\nrojo");
        } else if(numeroAleatorio==2) {
        	verdadero=false;
            System.out.println("\nnegro");
	    } else {
     	    verdadero=false;
            System.out.println("\nnegro");
        }
	  //apartado2
	    System.out.println();
	    categoriaytipodeclima(20);
	    categoriaytipodeclima(6.4);
	    categoriaytipodeclima(15.4);
	    
	    
	    //Ejercicio13
Scanner scanner = new Scanner(System.in);
        
        // Solicitar al usuario que ingrese un número del 1 al 9
        System.out.print("\nIngresa un número del 1 al 9: ");
        int numerooo = scanner.nextInt();

        // Usar switch para manejar el número
        switch (numerooo) {
            case 1:
                System.out.println(" uno.");
                break;
            case 2:
                System.out.println(" dos.");
                break;
            case 3:
                System.out.println(" tres.");
                break;
            case 4:
                System.out.println(" cuatro.");
                break;
            case 5:
                System.out.println(" cinco.");
                break;
            case 6:
                System.out.println(" seis.");
                break;
            case 7:
                System.out.println(" siete.");
                break;
            case 8:
                System.out.println(" ocho.");
                break;
            case 9:
                System.out.println(" nueve.");
                break;
            default:
                System.out.println("Número no válido. Debes ingresar un número del 1 al 9.");
                break;
        }
        
        //apartado2
        double numbero=-3;
        String resultados = (numbero > 0) ? "Positivo" :
        (numbero < 0) ? "Negativo" : "Cero";
        System.out.println(resultados);
        
        System.out.println();

        //Ejercicio14
        int tope=2;
        int altura=9;
        
        for(int x=0;x<altura;x++) {
        int spaces= altura-x-1;
        
        for (int p = 0; p < spaces; p++) {
            System.out.print(" ");
        }
        for(int i=0;i<tope;i++) {
        	 System.out.print("\033[0;42m*\033[0m");
        }
        
        System.out.println();
        
        tope+=2;
        }
        for(int n=0;n<2;n++) {
        	 int space = (10 - 1) - (4 / 2);
        	 
        for( int y=0;y<space;y++) {
        	 System.out.print(" ");
        }
        for(int m=0;m<4;m++) {
        	System.out.print("\033[0;42m*\033[0m");
        }
        System.out.println();
        
        }
        //Ejercicio15
        
        //Apartado1
        System.out.println("Ingresa un número: ");
        int  numberoo = scanner.nextInt();
        if(numberoo%2==0) {
        System.out.println("Este numero: " +numberoo+ " es divisible entre 2");
        }
        scanner.close();
	
	    //Apartado2
	    int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9}; 
	    System.out.println("Numeros divisibles entre 3: ");
	    for(int i=0;i<numeros.length;i++) {
	    	if(numeros[i]%3==0) {
	    		System.out.print(" "+numeros[i]);
	    	}
	    }
	    int i =0;
	    System.out.println("\nNumeros divisibles entre 3: ");
	    while(i<numeros.length) {
	    	if(numeros[i]%3==0) {
	    		System.out.print(" "+numeros[i]);
	    }
	    	i++;
	    }
	    
	    //Apartado3
	    String saludo="saludos";
	    int veces=9;
	    for(int q=0;q<1;q++) {
	    	System.out.print("\n"+saludo);
	    }
	    for(int q=0;q<veces;q++) {
	    	System.out.print(" "+saludo);
	    }
	    
	    int contador=0;
	    System.out.print("\n" +saludo);
	    do {
            System.out.print(" "+saludo); 
            contador++;// Saludo repetido
        } while (contador < veces); 
	    
	    //Apartado4
	    char[] lletres = {'A', 'B', 'C', 'D', 'E', 'F' , 'G', 'H', 'I', 'J',
	    		          'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z'}; 
	    System.out.println();
	    
	    int llargada=lletres.length-1;
	    
	    for(int u=0;u<26;u++) {
	    for(int k=llargada;k>=0;k--) {   
		System.out.print(lletres[k]);
	    }
	    System.out.println();
	    llargada=llargada-1;
	    }
	    int sumar = 2; 

	    for (int u = 0; u < 25; u++) {
	    for (int k = 0; k < sumar; k++) { 
	    System.out.print(lletres[k]); 
	    }
	    System.out.println(); 
	    sumar++; 
	    }
	    
	    //Ejercicio15
	    for (int k = 1; k < 5; k++) { 
		    System.out.println(k); 
		    if(k==3) {
		    	  System.out.println("Salimos del bucle en la tercera iteración.");
		    	break;
		    }
		    }
	    int p=1;
	    
	    while (p < 10) {
	        System.out.println("Iteración: " + p);
	        
	        if (p == 3) {
	            System.out.println("Salimos del bucle en la tercera iteración.");
	            break;
	        }
	        p++;
	    }
	    
	    for (int t = 1; t <= 10; t++) {
	        if (t == 5) { 
	            System.out.println("Saltamos la iteración: " + t);
	            continue; 
	        }
	        
	        System.out.println("Iteración: " + t);
	    }
	     
        //ejercicio16
	    System.out.println(javaonull("java"));
	    System.out.println(javaonull("nojava"));
	    
	    System.out.println(login("admin",1234));
	    System.out.println(login("marc",1234));
	    
	    System.out.println(parOImpar());
	    
	    //Ejercicio17
	    double numeroDouble = 123.456;

        
        float numeroFloat = (float) numeroDouble;
        System.out.println("De double a float: " + numeroFloat);

        
        long numeroLong = (long) numeroFloat;
        System.out.println("De float a long: " + numeroLong);

        
        int numeroInt = (int) numeroLong;
        System.out.println("De long a int: " + numeroInt);

        
        short numeroShort = (short) numeroInt;
        System.out.println("De int a short: " + numeroShort);

        
        byte numeroByte = (byte) numeroShort;
        System.out.println("De short a byte: " + numeroByte);
	    
        byte numeroByte1 = 100;

       
        short numeroShort1 = numeroByte1;
        System.out.println("De byte a short: " + numeroShort1);

        
        int numeroInt1 = numeroShort1;
        System.out.println("De short a int: " + numeroInt1);

       
        long numeroLong1 = numeroInt1;
        System.out.println("De int a long: " + numeroLong1);

        
        float numeroFloat1 = numeroLong1;
        System.out.println("De long a float: " + numeroFloat1);

        
        double numeroDouble1 = numeroFloat1;
        System.out.println("De float a double: " + numeroDouble1);
        
        byte bytenum=100;
        
        bytenum = (byte) (bytenum * 2);

        System.out.println("Resultado: " + bytenum);
        //pasa que ya no es un byte por la tanto tenemos que hacer la cnversion a int
	
        
        //Ejercicio18
        String rojo = "\033[0;31m"; 
        String azul = "\033[0;34m";  
        String verde = "\033[0;32m"; 
        String reset = "\033[0m";
	
        System.out.println(rojo + "Rango byte desde:   -128   hasta:  127  " + reset);
        System.out.println(azul + "Rango short desde:  -32768   hasta:    32767" + reset);
        System.out.println(verde + "Rango int desde:   -2147483648  hasta:    2147483647" + reset);
        
        //Ejercicio19
        
	}
}


