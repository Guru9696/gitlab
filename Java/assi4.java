import java.io.*;
import java.util.*;

class Singleton_pattern
{
   private static Singleton_pattern instance = new Singleton_pattern();
   private Singleton_pattern(){}
   public static Singleton_pattern getInstance()
   {
      return instance;
   }

   public void showMessage()
   {
      System.out.println("Hello Everyone!!!!");
   }
}

class assi4
{
   public static void main(String[] args)
   {
      Singleton_pattern object = Singleton_pattern.getInstance();
      object.showMessage();
   }
}
