package packagemain;

import packagesecundario.HastaNunqui;
import packagesecundario.HolaMundo;

public class Main {
	
	int variable=0;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Main m= new Main();
		
		packagesecundario.HolaMundo.saludar();// si lo quieres poner sin hacer el import
		System.out.println(HolaMundo.saludar());
		System.out.println(HastaNunqui.patada());
		
		m.devolvertecno();
		m.fibonacci(55);
		m.supercali();
		m.sumar(3);
	}
		//Ejercicio de recursividad 
		
		String[] tecnologies= {"Markdown","Regexp","HTML","CSS","JS","SQL","Java"};
		
		public void devolvertecno() {
			 
		        System.out.println(tecnologies[variable]);

		        if (tecnologies[variable].equals("HTML")) {
		            System.out.println("Se acabó");
		            return; 
		        }

		        variable++;
		        devolvertecno();
		    }
		
		int num=1;
		int num1=0;
		int numero1=55;
		
        public void fibonacci(int numero) {
        	
        	 int resultado=0;
        	 resultado=num+num1;
        	 System.out.print(" "+resultado);
        	 num1=num;
        	 num=resultado;
        	 
        	 if(resultado==numero1) {
        		 System.out.println(" FINISH");
        		 return;
        	 }
        	 
		     fibonacci(numero1);
        	
        }
        
        String palabra = "supercalifrastilisticoespialidoso";
        
        char[] arrayDeLetras = palabra.toCharArray();
        int a =arrayDeLetras.length-1;
        public void supercali() {
        	
        	System.out.print(" "+arrayDeLetras[a]);
         	
        	
        	if(a==0) {
        		 System.out.println();
            	return;
            }
        	a--;
        	supercali();
            }
        int resultado=0;
       
        public void sumar(int num) {
        	
        	resultado+=num+2;
        	System.out.println(resultado);
        	if(resultado==100) {
        		return;
        	}
        	sumar(3);
        	
        	
        }
        }
		
		


