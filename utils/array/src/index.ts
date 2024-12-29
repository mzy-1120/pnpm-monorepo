function deepCopy<T>(obj: T): T {
  // 处理基本数据类型和 null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  // 处理 RegExp 对象
  if (obj instanceof RegExp) {
    return new RegExp(obj) as T;
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const copy: any[] = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy as T;
  }

  // 处理普通对象
  const copy: { [key: string]: any } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy as T;
}

export default {
  deepCopy
}