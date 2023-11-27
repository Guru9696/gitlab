
import java.util.Enumeration;
import java.util.Iterator;

// Adapter class to convert Enumeration to Iterator
class EnumerationAdapter<T> implements Iterator<T> {
    private Enumeration<T> enumeration;

    public EnumerationAdapter(Enumeration<T> enumeration) {
        this.enumeration = enumeration;
    }

    @Override
    public boolean hasNext() {
        return enumeration.hasMoreElements();
    }

    @Override
    public T next() {
        return enumeration.nextElement();
    }

    @Override
    public void remove() {
        throw new UnsupportedOperationException("Remove operation is not supported by Enumeration.");
    }
}

public class assign7 {
    public static void main(String[] args) {
        // Create an Enumeration (example: of strings)
        Enumeration enumeration = new java.util.StringTokenizer("One Two Three Four Five");

        // Create an Iterator using the Adapter
        Iterator<String> iterator = new EnumerationAdapter<>(enumeration);

        // Use the Iterator to iterate through elements
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}

