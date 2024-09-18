# Intl.NumberFormat

O objeto Intl.NumberFormat permite a formatação de números sensível ao idioma.

```js
const number = 123456.789;

console.log(
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number,
  ),
);
// Saída esperada: "123.456,79 €"

// O iene japonês não usa uma unidade menor
console.log(
  new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
    number,
  ),
);
// Saída esperada: "￥123,457"

// Limitar a três dígitos significativos
console.log(
  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Saída esperada: "1,23,000"
```

## Construtor

### [Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)

Cria um novo objeto `NumberFormat`.

## Métodos estáticos

### [Intl.NumberFormat.supportedLocalesOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf)

Retorna um array contendo os locais fornecidos que são suportados sem ter que recorrer ao local padrão do tempo de execução.

## Propriedades de instância

Essas propriedades são definidas em `Intl.NumberFormat.prototype` e compartilhadas por todas as instâncias de `Intl.NumberFormat`.

### [Intl.NumberFormat.prototype.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

A função construtora que criou o objeto de instância. Para instâncias de Intl.NumberFormat, o valor inicial é o construtor Intl.NumberFormat.

### Intl.NumberFormat.prototypeSymbol.toStringTag

O valor inicial da propriedade Symbol.toStringTag é a string "Intl.NumberFormat". Esta propriedade é usada em Object.prototype.toString().

## Métodos de instância

### [Intl.NumberFormat.prototype.format()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format)

Função getter que formata um número de acordo com o local e as opções de formatação deste objeto `Intl.NumberFormat`.

### [Intl.NumberFormat.prototype.formatRange()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)

Função getter que formata um intervalo de números de acordo com o local e as opções de formatação do objeto `Intl.NumberFormat` a partir do qual o método é chamado.

### [Intl.NumberFormat.prototype.formatRangeToParts()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts)

Retorna um [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) de objetos representando o intervalo de strings numéricas em partes que podem ser usadas para formatação personalizada sensível ao local.

### [Intl.NumberFormat.prototype.formatToParts()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)

Retorna um [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) de objetos representando a string numérica em partes que podem ser usadas para formatação personalizada sensível ao local.

### [Intl.NumberFormat.prototype.resolvedOptions()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions)

Retorna um novo objeto com propriedades refletindo o local e as opções de collation calculadas durante a inicialização do objeto.

## Exemplos

### Usos Básicos

No uso básico sem especificar um local, é retornada uma string formatada no local padrão e com opções padrão.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// '3,500' se no local de inglês dos EUA
```

### Usando locais

Este exemplo mostra algumas das variações em formatos numéricos localizados. Para obter o formato do idioma usado na interface do usuário do seu aplicativo, certifique-se de especificar esse idioma (e possivelmente alguns idiomas de fallback) usando o argumento `locales`:

```js
const number = 123456.789;

// O alemão usa a vírgula como separador decimal e o ponto para milhares
console.log(new Intl.NumberFormat("de-DE").format(number));
// 123.456,789

// Árabe em muitos países árabes usa dígitos árabes reais
console.log(new Intl.NumberFormat("ar-EG").format(number));
// ١٢٣٤٥٦٫٧٨٩

// A Índia usa separadores de milhar/lakh/crore
console.log(new Intl.NumberFormat("en-IN").format(number));
// 1,23,456.789

// a chave nu solicita um sistema de numeração, por exemplo, decimal chinês
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// 一二三,四五六.七八九

// ao solicitar um idioma que pode não ser suportado, como
// Balinês, inclua um idioma de fallback, neste caso, Indonésio
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// 123.456,789
```

### Usando opções

Os resultados podem ser personalizados usando o argumento [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options):

```js
const number = 123456.789;

// solicitar um formato de moeda
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

// o iene japonês não usa uma unidade menor
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// ￥123,457

// limitar a três dígitos significativos
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// Formatação com unidades
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

Para uma lista completa de opções, consulte a página do [construtor Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).