package packageclass;

public class car {
	
	private  String name;
	private  String color;
	private  String matricula;
	private  String combustible;
	private  String tipodecoche;
	private  int    speed;

	public car(String name, String color, String matricula, String combustible, String tipodecoche, int speed) {
		super();
		this.name = name;
		this.color = color;
		this.matricula = matricula;
		this.combustible = combustible;
		this.tipodecoche = tipodecoche;
		this.speed = speed;
	}
	public car() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getCombustible() {
		return combustible;
	}

	public void setCombustible(String combustible) {
		this.combustible = combustible;
	}

	public String getTipodecoche() {
		return tipodecoche;
	}

	public void setTipodecoche(String tipodecoche) {
		this.tipodecoche = tipodecoche;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public String drive() {
	boolean cert=false;
	if(cert==false) {
		return("apagado");
		
	}else { return("encendido");
	}
	}
	public String refuel(boolean cert) {
		if(cert==true) {
			return("omplir combustible");
		}else 
		{return("no combustible");
	}
	}
}
