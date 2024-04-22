class Storage {
    #items
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem); 
    }
    removeItem(itemToRemove) {

    }
}