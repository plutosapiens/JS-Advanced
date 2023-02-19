class WineSelection {
    constructor(space) {
      this.space = space;
      this.wines = [];
      this.bill = 0;
    }
  
    reserveABottle(wineName, wineType, price) {
      if (this.space <= 0) {
        throw new Error("Not enough space in the cellar.");
      }
      this.wines.push({
        wineName: wineName,
        wineType: wineType,
        price: price,
        paid: false,
      });
      this.space--;
      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
  
    payWineBottle(wineName, price) {
      const wine = this.wines.find((w) => w.wineName === wineName);
      if (!wine) {
        throw new Error(`${wineName} is not in the cellar.`);
      }
      if (wine.paid) {
        throw new Error(`${wineName} has already been paid.`);
      }
      wine.paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }
  
    openBottle(wineName) {
      const index = this.wines.findIndex((w) => w.wineName === wineName);
      if (index < 0) {
        throw new Error("The wine, you're looking for, is not found.");
      }
      const wine = this.wines[index];
      if (!wine.paid) {
        throw new Error(`${wineName} need to be paid before open the bottle.`);
      }
      this.wines.splice(index, 1);
      this.space++;
      return `You drank a bottle of ${wineName}.`;
    }
  
    cellarRevision(wineType) {
      const wines = wineType
        ? this.wines.filter((w) => w.wineType === wineType)
        : this.wines;
      const countPaid = wines.filter((w) => w.paid).length;
      const countNotPaid = wines.length - countPaid;
      const emptySlots = this.space;
      const paid = this.bill;
      const info = [
        `You have space for ${emptySlots} bottles more.`,
        `You paid ${paid}$ for the wine.`,
      ];
      wines
        .sort((w1, w2) => w1.wineName.localeCompare(w2.wineName))
        .forEach((w) =>
          info.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`)
        );
      if (info.length > 2) {
        return info.join("\n");
      } else {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
    }
  }

//   Here's a possible implementation for the WineSelection class:

// javascript
// Copy code
class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= 0) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({
      wineName: wineName,
      wineType: wineType,
      price: price,
      paid: false,
    });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const wine = this.wines.find((w) => w.wineName === wineName);
    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (wine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }
    wine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    const index = this.wines.findIndex((w) => w.wineName === wineName);
    if (index < 0) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    const wine = this.wines[index];
    if (!wine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    this.wines.splice(index, 1);
    this.space++;
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    const wines = wineType
      ? this.wines.filter((w) => w.wineType === wineType)
      : this.wines;
    const countPaid = wines.filter((w) => w.paid).length;
    const countNotPaid = wines.length - countPaid;
    const emptySlots = this.space;
    const paid = this.bill;
    const info = [
      `You have space for ${emptySlots} bottles more.`,
      `You paid ${paid}$ for the wine.`,
    ];
    wines
      .sort((w1, w2) => w1.wineName.localeCompare(w2.wineName))
      .forEach((w) =>
        info.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`)
      );
    if (info.length > 2) {
      return info.join("\n");
    } else {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }
  }
}
// Let's test the class with the examples you provided:
// Example 1
const selection1 = new WineSelection(2);
console.log(selection1.reserveABottle("Sauvignon Blanc Marlborough", "White", 50));
console.log(selection1.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120));
try {
  console.log(selection1.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
} catch (error) {
  console.error("Error", error.message);
}

// Example 2
const selection2 = new WineSelection(2);
selection2.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
console.log(selection2.payWineBottle("Sauvignon Blanc Marlborough"))