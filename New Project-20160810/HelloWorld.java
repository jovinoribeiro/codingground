public class HelloWorld{

     public static void main(String []args){
        System.out.println("Hello World");
        HelloWorld hw = new HelloWorld();
        System.out.println(hw.pairSumSequence(3));
         
     }
     
     public int pairSumSequence(int n) {
         int sum = 0;
         for (int i = 0; i < n; i++) {
             sum += pairSum(i, i + 1);
         }
         return sum;
     }
     
     public int pairSum(int a, int b) {
         return a + b;
     }
}
