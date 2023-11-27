import java.util.*;
class EnumerationIterator implements Iterator {
	Enumeration enumeration;

	public EnumerationIterator(Enumeration enumeration) {
		this.enumeration = enumeration;
	}

	public boolean hasNext() {
		return enumeration.hasMoreElements();
	}

	public Object next() {
		return enumeration.nextElement();
	}

	public void remove() {
		throw new UnsupportedOperationException();
	}
}

class assi7 {
	public static void main (String args[]) {
		Vector v = new Vector(Arrays.asList("pc","mobiles","tablet","watches"));
		Iterator iterator = new EnumerationIterator(v.elements());
		while (iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}
}