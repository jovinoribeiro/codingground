public class HelloWorld{

     public static void main(String []args){
        HelloWorld hw = new HelloWorld();
        hw.print("Maria Alcina");
     }
     
     public void print(Object o) {
         System.out.println(o.toString());
     }
}
