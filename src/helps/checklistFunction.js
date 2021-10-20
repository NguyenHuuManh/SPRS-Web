import { uniqBy, isEmpty } from "lodash";

export const isAllItemOnPageChecked = (parent, child, key) => {
    return !isEmpty(child) && child.every((elm) => parent.findIndex((i) => i[key] === elm[key]) > -1);
};

export const removeCheckAllItems = (parent, child, key) => {
    return parent.filter((elm) => child.findIndex((i) => i[key] === elm[key]) < 0);
};

export const addAllItemOfPage = (targetArray, arrayForAdd, key) => {
    return uniqBy([...arrayForAdd, ...targetArray], key);
};

export const addAnItems = (targetArray, itemForAdd, key) => {
    const arrayAfterFilterItem = targetArray.filter((elm) => elm[key] !== itemForAdd[key]);
    if (arrayAfterFilterItem.length === targetArray.length) {
        arrayAfterFilterItem.push(itemForAdd);
    }
    return arrayAfterFilterItem;
};

export const isItemChecked = (parent, itemForCheck, key) => {
    return Boolean(parent.filter((elm) => elm[key] === itemForCheck[key]).length > 0);
};

export const selectedItem = (parent, itemForSelect, key) => {
    return uniqBy([...parent, ...[itemForSelect]], key);
};
