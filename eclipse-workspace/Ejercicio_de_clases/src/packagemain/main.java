package packagemain;

import packageclass.car;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		car car1= new car("kia","blue","2030AS","DIESEL","sport",200);
		car car2= new car("mercedez","black","2342ED","DIESEL","familiar",180);
		car car3= new car("bmw","white","1234AS","GASOLINA","sport",240);
		car car4= new car();
		
		car1.getSpeed();
		car2.setSpeed(400);
		car3.getCombustible();
		car4.setCombustible("DIESEL");
		car3.drive();
		car2.refuel(false);
		}

}
