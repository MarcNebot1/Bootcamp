package packagemain;

import javax.swing.JOptionPane;

import packageclass.tarjetacredito;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
     tarjetacredito t= new tarjetacredito("123456796969", "marc", "1/11/2024", "santander", "123", false);
     
     t.gastar(12);// gastamos haciendo una compra de 12 euros por ejemplo con la tarjeta apagada
     System.out.println("Saldoactual: "+t.saldoactual());
     
     System.out.println("tarjetactivada: "+t.isActivada()); // miramos si la tarjeta esta activada
     System.out.println("tarjetactivada: "+t.setActivada(true)); //activamos la tarjeta
     
     t.gastar(200);// gastamos haciendo una compra de 12 euros con la tarjeta activada
     System.out.println("Saldoactual: "+t.saldoactual());//miramos el salldo acutal despues de haber gastado
     
     t.gastar(801);//gastamos mas del saldo que tenemos no se opera
     System.out.println("Saldoactual: "+t.saldoactual());
     JOptionPane.showMessageDialog(null, "Supera el saldo actual", "Mensaje", JOptionPane.WARNING_MESSAGE);
	}

}
