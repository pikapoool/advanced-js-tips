// Пузырьковая сортировка
function bubbleSort(a) {
  var n = a.length;
  for (var i = 0; i < n - 1; i++) { // Выполняется для каждого элемента массива, кроме последнего.
    for (var j = 0; j < n - 1 - i; j++) { // Для всех последующих за текущим элементов
      if (a[j + 1] < a[j]) { // выпоняется проверка, и если следующий элемент меньше текущего
        var t = a[j + 1]; a[j + 1] = a[j]; a[j] = t; // то эти элементы меняются местами.
      }
    }
  }
  return a;
};

// Сортировка выбором
function selectionSort(a) {
  var n = a.length;
  for (var i = 0; i < n - 1; i++) { // Выполняется для каждого элемента массива, кроме последнего.
    var min = i; // В качестве текущего минимального устанавливается текущий элемент,
    for (var j = i + 1; j < n; j++) { // а для всех последующих элементов
      if (a[j] < a[min]) min = j; // выпоняется проверка: если следующий элемент меньше текущего, он устанавливается в качестве минимального значения.
      var t = a[min]; a[min] = a[i]; a[i] = t; // Минимальный и текущий элементы меняются местами (если текущий = минимальный, то ничего страшного не случится).
    }
  }
  return a;
};

// Сортировка вставками
function insertionSort(a) {
  var n = a.length;
  for (var i = 0; i < n; i++) { // Выполняется для каждого элемента массива.
    var v = a[i], j = i - 1; // Определяется значение текущего элемента, а также индекс предыдущего элемента.
    while (j >= 0 && a[j] > v) { // Пока индекс предыдущего элемента >= 0 и его значение больше значения текущего элемента.
      a[j + 1] = a[j]; // Значением следующего за текущим элемента массива становится значение предыдущего элемента.
      j--;
    }
    a[j + 1] = v; // Значением следующего за текущим элемента массива становится значение текущего элемента
  }
  return a;
};

// Сортировка Шелла
function shellSort(A) {
  var n = A.length, i = Math.floor(n / 2);
  while (i > 0) {
    for (var j = 0; j < n; j++) {
      var k = j, t = A[j];
      while (k >= i && A[k - i] > t) { A[k] = A[k - i]; k -= i; }
      A[k] = t;
    }
    i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
  }
  return A;
}

// Сортировка подсчётом
function simpleCountingSort(A) {
  var n = A.length, Count = [], B = [];
  for (var i = 0; i < n; i++) Count[i] = 0;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (A[i] < A[j]) Count[j]++;
      else Count[i]++;
    }
  }
  for (var i = 0; i < n; i++) B[Count[i]] = A[i];
  return B;
}

// Сортировка расчёской 
function newGap(gap) {       // Вспомогательная функция.
  gap /= 1.3;
  if (gap == 9 || gap == 10) gap = 11;
  if (gap < 1) return 1;
  return gap;
}

function CombSort(A) {               // Функция сортировки расчёской.
  var n = A.length, gap = n;
  do {
    swapped = false;
    gap = newGap(gap);
    for (var i = 0; i < n - gap; ++i) {
      if (A[i] > A[i + gap]) {
        swapped = true;
        var t = A[i + gap]; A[i + gap] = A[i]; A[i] = t;
      }
    }
  } while (gap > 1 || swapped);
  return A;
}

// Сортировка слиянием
function Merge(a, low, mid, high) {    //Вспомогательная функция.
  var b = new Array(high + 1 - low), h, i, j = mid + 1, k, h = low, i = 0;
  while (h <= mid && j <= high) {
    if (a[h] <= a[j]) { b[i] = a[h]; h++; }
    else { b[i] = a[j]; j++; }
    i++;
  }
  if (h > mid) { for (k = j; k <= high; k++) { b[i] = a[k]; i++; } }
  else { for (k = h; k <= mid; k++) { b[i] = a[k]; i++; } }
  for (k = 0; k <= high - low; k++) a[k + low] = b[k];
  return a;
}

function MergeSort(A) {     //Функция сортировки слиянияем.
  function merge_sort(a, low, high) {
    if (low < high) {
      var mid = Math.floor((low + high) / 2);
      merge_sort(a, low, mid);
      merge_sort(a, mid + 1, high);
      Merge(a, low, mid, high);
    }
  }
  var n = A.length;
  merge_sort(A, 0, n - 1);
  return A;
}


// Пирамидальная сортировка
function heapSort(A) {
  if (A.length == 0) return [];
  var n = A.length, i = Math.floor(n / 2), j, k, t;
  while (true) {
    if (i > 0) t = A[--i];
    else {
      n--;
      if (n == 0) return A;
      t = A[n]; A[n] = A[0];
    }
    j = i; k = j * 2 + 1;
    while (k < n) {
      if (k + 1 < n && A[k + 1] > A[k]) k++;
      if (A[k] > t) { A[j] = A[k]; j = k; k = j * 2 + 1; }
      else break;
    }
    A[j] = t;
  }
}


// Быстрая сортировка
function QuickSort(A) {
  if (A.length == 0) return [];
  var a = [], b = [], p = A[0];
  for (var i = 1; i < A.length; i++) {
    if (A[i] < p) a[a.length] = A[i];
    else b[b.length] = A[i];
  }
  return QuickSort(a).concat(p, QuickSort(b));
}

// Сортировка перемешиванием (шейкерная сортировка, англ. Cocktail sort) — разновидность пузырьковой сортировки.
function CocktailSort(A) {   //Также называют ShakerSort.
  var i = 0, j = A.length - 1, s = true, t;
  while (i < j && s) {
    s = false;
    for (var k = i; k < j; k++) { if (A[k] > A[k + 1]) { t = A[k]; A[k] = A[k + 1]; A[k + 1] = t; s = true; } }
    j--;
    if (s) {
      s = false;
      for (var k = j; k > i; k--) { if (A[k] < A[k - 1]) { t = A[k]; A[k] = A[k - 1]; A[k - 1] = t; s = true; } }
    }
    i++;
  }
  return A;
}

// Гномья сортировка (англ. Gnome sort) — алгоритм сортировки, похожий на сортировку вставками, 
// но в отличие от последней перед вставкой на нужное место происходит серия обменов, как в сортировке пузырьком.
function GnomeSort(A) {
  var n = A.length, i = 1, j = 2;
  while (i < n) {
    if (A[i - 1] < A[i]) { i = j; j++; }
    else {
      var t = A[i - 1]; A[i - 1] = A[i]; A[i] = t;
      i--;
      if (i == 0) { i = j; j++; }
    }
  }
  return A;
}

// Естественная сортировка (англ. Natural sort) — простая и эффективная модификация сортировки слиянием, 
// которая учитывает, что данные (или их часть) могут быть уже отсортированы. Суть её в том, что нужно образовывать цепочки, 
// и производить их слияние не в заранее определённом и фиксированном порядке, а анализировать имеющиеся в массиве данные.
function NaturalSort(string_array)  { // string_array - это массив со строками (!), не числами.
  var splitters = string_array.map(makeSplitter),
    sorted = splitters.sort(compareSplitters);
  return sorted.map(function (splitter) { return splitter.item });
  function makeSplitter(item) { return new Splitter(item) }
  function Splitter(item) {
    var index = 0, from = 0, parts = [], completed = false;
    this.item = item; var key = item; this.key = key;
    this.count = function () { return parts.length; };
    this.part = function (i) {
      while (parts.length <= i && !completed) next();
      return i < parts.length ? parts[i] : null;
    };
    function next() {
      if (index < key.length) {
        while (++index) {
          var currentIsDigit = isDigit(key.charAt(index - 1)),
          nextChar = key.charAt(index),
          currentIsLast = index === key.length,
          isBorder = currentIsLast || xor(currentIsDigit, isDigit(nextChar));
          if (isBorder) {
            var partStr = key.slice(from, index);
            parts.push(new Part(partStr, currentIsDigit));
            from = index;
            break;
          }
        }
      }
      else completed = true;
    }
    function Part(text, isNumber) { this.isNumber = isNumber; this.value = isNumber ? Number(text) : text; }
  }
  function compareSplitters(sp1, sp2) {
    var i = 0;
    do {
      var first = sp1.part(i), second = sp2.part(i);
      if (null !== first && null !== second) {
        if (xor(first.isNumber, second.isNumber)) { return first.isNumber ? -1 : 1; }
        else {
          var comp = compare(first.value, second.value);
          if (comp != 0) return comp;
        }
      } else return compare(sp1.count(), sp2.count());
    } while (++i);
    function compare(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
  }
  function xor(a, b) { return a ? !b : b; }
  function isDigit(chr) {
    var code = charCode(chr);
    return code >= charCode("0") && code <= charCode("9");
    function charCode(c) { return c.charCodeAt(0); }
  }
}

let array = [85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15];

console.log(bubbleSort(array));
console.log(selectionSort(array));
console.log(insertionSort(array));
console.log(shellSort(array));
console.log(simpleCountingSort(array));
console.log(CombSort(array));
console.log(MergeSort(array));
console.log(heapSort(array));
console.log(QuickSort(array));
console.log(CocktailSort(array));
console.log(GnomeSort(array));