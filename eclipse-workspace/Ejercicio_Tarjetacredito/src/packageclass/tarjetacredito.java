package packageclass;

public class tarjetacredito {
	 String numerotarjeta;
	 String nombre;
	 String fechadecaducidad;
	 String entidademisora;
	 String numerode3cifras;
	 int saldo = 1000;
	 boolean activada;
	 
 public tarjetacredito(String numerotarjeta, String nombre, String fechadecaducidad, String entidademisora,
			String numerode3cifras,boolean activada) {
		super();
		this.numerotarjeta = numerotarjeta;
		this.nombre = nombre;
		this.fechadecaducidad = fechadecaducidad;
		this.entidademisora = entidademisora;
		this.numerode3cifras = numerode3cifras;
		this.activada = activada;
		
	}

public String getNumerotarjeta() {
	return numerotarjeta;
}

public void setNumerotarjeta(String numerotarjeta) {
	this.numerotarjeta = numerotarjeta;
}

public String getNombre() {
	return nombre;
}

public void setNombre(String nombre) {
	this.nombre = nombre;
}

public String getFechadecaducidad() {
	return fechadecaducidad;
}

public void setFechadecaducidad(String fechadecaducidad) {
	this.fechadecaducidad = fechadecaducidad;
}

public String getEntidademisora() {
	return entidademisora;
}

public void setEntidademisora(String entidademisora) {
	this.entidademisora = entidademisora;
}

public String getNumerode3cifras() {
	return numerode3cifras;
}

public void setNumerode3cifras(String numerode3cifras) {
	this.numerode3cifras = numerode3cifras;
}

public boolean isActivada() {
	return activada;
}

public boolean setActivada(boolean activada) {
	return this.activada = activada;
}

public int getSaldo() {
	return saldo;
}

public void gastar(int dinerocompra) {
	if (activada==true && saldo>=dinerocompra){
	 saldo=saldo-dinerocompra;
	}
	
}
public int saldoactual() {
	return saldo;
}

}

