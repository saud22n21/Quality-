// Data Class (just holds data, no behavior)
class UserData {
    constructor(name, age, email, address, phone, isAdmin) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.isAdmin = isAdmin;
    }
}

// Lazy Class (does almost nothing)
class Logger {
    log(message) {
        console.log(message);
    }
}

// Temporary Field (fields only used in specific cases)
class OrderProcessor {
    constructor() {
        this.temporaryDiscount = 0; // Only used in applyDiscount
        this.temporaryTaxRate = 0; // Only used in calculateTax
    }

    processOrder(order, user, discount, taxRate, shippingCost, isInternational) {
        this.temporaryDiscount = discount;
        this.temporaryTaxRate = taxRate;

        let total = this.calculateTotal(order);
        total = this.applyDiscount(total);
        total = this.calculateTax(total);
        total = this.addShippingCost(total, shippingCost, isInternational);

        return total;
    }

    calculateTotal(order) {
        return order.items.reduce((sum, item) => sum + item.price, 0);
    }

    applyDiscount(total) {
        return total - this.temporaryDiscount; // Temporary Field used here
    }

    calculateTax(total) {
        return total + (total * this.temporaryTaxRate); // Temporary Field used here
    }

    addShippingCost(total, shippingCost, isInternational) {
        if (isInternational) {
            return total + shippingCost * 2; // Duplicate Code (same logic as below)
        }
        return total + shippingCost; // Duplicate Code (same logic as above)
    }
}

// Long Parameter List
function createUserProfile(name, age, email, address, phone, isAdmin, isVerified, joinDate, lastLogin, preferences) {
    const user = new UserData(name, age, email, address, phone, isAdmin);
    const profile = {
        user,
        isVerified,
        joinDate,
        lastLogin,
        preferences
    };
    return profile;
}

// Shotgun Surgery (changes in one place require changes in many others)
function updateUserProfile(profile, newName, newEmail, newAddress, newPhone) {
    profile.user.name = newName;
    profile.user.email = newEmail;
    profile.user.address = newAddress;
    profile.user.phone = newPhone;

    // Dead Code (this code is never used)
    if (false) {
        console.log("This will never run.");
    }
}

// Duplicate Code
function calculateShippingCost(order, isInternational) {
    const baseCost = 10;
    if (isInternational) {
        return baseCost * 2; // Duplicate logic
    }
    return baseCost; // Duplicate logic
}

// Dead Code (unused function)
function unusedFunction() {
    console.log("This function is never called.");
}

// Example usage (with even more code smells)
const order = { items: [{ name: "Book", price: 20 }, { name: "Pen", price: 5 }] };
const user = new UserData("John Doe", 30, "john@example.com", "123 Main St", "555-1234", false);
const processor = new OrderProcessor();
const total = processor.processOrder(order, user, 5, 0.1, 10, true);
console.log("Total:", total);

const profile = createUserProfile("Jane Doe", 25, "jane@example.com", "456 Elm St", "555-5678", false, true, "2023-01-01", "2023-10-01", { theme: "dark" });
updateUserProfile(profile, "Jane Smith", "jane.smith@example.com", "789 Oak St", "555-8765");
console.log("Updated Profile:", profile);