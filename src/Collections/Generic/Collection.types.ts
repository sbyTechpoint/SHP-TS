
export interface IEqualityComparer < T > {
    // callBack declaration
    (a : T, b : T): boolean;
}

//Interface for ICollection
export interface ICollection < T > {
    add(item : T): this;
    count(): number;

    clear(): this;
    contains(item : T, compareFn : (a : T) => boolean): boolean;
    copyTo(array : T[], startIndex : number): void;
    remove(item : T): this;
}

//interface for IList
export interface IList < T > extends ICollection < T > {
    addRange(...items : T[]): this;
    indexOf(item : T, compareFn?: IEqualityComparer < T >): number;
    insert(index : number, item : T): this;
    removeAt(index : number): this;
}

export interface IGroupedBy < T > {
    //key index declaration
    [key : string]: T[];
}
