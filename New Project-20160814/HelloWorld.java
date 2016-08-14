public class HelloWorld{

     public static void main(String []args){
        HelloWorld t = new HelloWorld();
        String[] words = new String[] {"house", "car", "book" };
        System.out.println(t.joinWords(words));
     }
     
     public String joinWords(String[] words) {
         String sentence = "";
         for (String w : words) {
             sentence = sentence + w;
         }
         return sentence;
     }
}
