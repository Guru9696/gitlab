import java.util.Iterator;

// Define the MenuItem class
class MenuItem {
    private String name;
    private String description;
    private double price;

    public MenuItem(String name, String description, double price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }
}

// Define the Menu interface
interface Menu {
    Iterator<MenuItem> createIterator();
}

// Concrete implementation of the Menu
class BreakfastMenu implements Menu {
    private MenuItem[] items;
    private int numberOfItems = 0;
    private static final int MAX_ITEMS = 5;

    public BreakfastMenu() {
        items = new MenuItem[MAX_ITEMS];
        addItem("Pancakes", "Fluffy pancakes with maple syrup", 4.99);
        addItem("Omelette", "Three-egg omelette with veggies", 6.49);
        // Add more breakfast items
    }

    public void addItem(String name, String description, double price) {
        if (numberOfItems < MAX_ITEMS) {
            items[numberOfItems] = new MenuItem(name, description, price);
            numberOfItems++;
        } else {
            System.out.println("Menu is full. Cannot add more items.");
        }
    }

    public Iterator<MenuItem> createIterator() {
        return new BreakfastMenuIterator(items);
    }
}

// Iterator for BreakfastMenu
class BreakfastMenuIterator implements Iterator<MenuItem> {
    private MenuItem[] items;
    private int position = 0;

    public BreakfastMenuIterator(MenuItem[] items) {
        this.items = items;
    }

    public boolean hasNext() {
        return position < items.length && items[position] != null;
    }

    public MenuItem next() {
        MenuItem menuItem = items[position];
        position++;
        return menuItem;
    }
}

// Define LunchMenu, DinnerMenu, and their respective iterators in a similar manner

public class assign8 {
    public static void main(String[] args) {
        Menu breakfastMenu = new BreakfastMenu();
        // Create LunchMenu and DinnerMenu objects in a similar way

        // Iterate over the menus
        System.out.println("Breakfast Menu:");
        printMenu(breakfastMenu.createIterator());

        // Print LunchMenu and DinnerMenu in a similar way
    }

    public static void printMenu(Iterator<MenuItem> iterator) {
        while (iterator.hasNext()) {
            MenuItem menuItem = iterator.next();
            System.out.println("Name: " + menuItem.getName());
            System.out.println("Description: " + menuItem.getDescription());
            System.out.println("Price: $" + menuItem.getPrice());
            System.out.println();
        }
    }
}

