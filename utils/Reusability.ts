import * as fs from 'fs';
import path = require('path');

export class reusability {
    private locators:any;

    constructor(filename:string) {
        const filePath = path.join(__dirname, '..', 'locators', filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        this.locators = JSON.parse(fileContent);
    }

    getLocator(component: string, element: string, ...args: string[]): string {
        const locatorObj = this.locators[component][element];
        if (!locatorObj) {
      throw new Error(`Locator not found for ${component} -> ${element}`);
    }
    return args.reduce(
      (locator: string, value: string, index: number) =>
        locator.replace(`<arg${index}>`, this.toXPathLiteral(value)),
      locatorObj.value
    );
    }
    
    getLocatorType(component: string, element: string): string {
    const locatorObj = this.locators[component][element];
    if (!locatorObj) {
      throw new Error(`Locator type not found for ${component} -> ${element}`);
    }
    return locatorObj.type;
  }

  private toXPathLiteral(value: string): string {
    if (!value.includes("'")) {
      return `'${value}'`;
    }

    return `concat(${value.split("'").map((part) => `'${part}'`).join(`, "'", `)})`;
  }
}