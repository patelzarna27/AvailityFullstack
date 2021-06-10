public class checker {
    public static void main(String[] args) {
        System.out.println("Hellow");
         String str= "";
         if(args.length > 0)
          str= args[0];
        else 
        str = "Zarns()sadasdsa()sdasd";
        
         char lisp[] = str.toCharArray(); // convert string into char array Zarna = ['Z','A','R','N','A']
         int counter = 0; // counter for parenthesis

        // //   (ZAR(NA))
        for (int n = 0; n< lisp.length; n++) {
            if (lisp[n] == '(')
                counter++;
            else if (lisp[n] == ')')
                counter--;
        }
        if (counter == 0){
            System.out.println("true");
            return ;
        }
        else
        {
            System.out.println("false");
            return ;
        }
	}
    
       
    
}
