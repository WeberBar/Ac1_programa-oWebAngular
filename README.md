1. Crie um novo projeto e adicione um menu superior com as opções: calcular média, calculadora, apólice, conversor temperatura e IMC. Cada item do menu deverá abrir seu respectivo componente.

2. Crie os seguintes componentes e implemente o código conforme a explicação:

1. Calcular Média

Crie uma componente que receberá as notas: AC1, AC2, AG e AF.
Calcule a média ao clicar no botão “Calcular” e mostre se está aprovado ou reprovado, a média é 5.
Média Final = (AC1 * 0,15) + (AC2 *0,30) + (AG * 0,10) + (AF * 0,45)
2. Calculadora

Crie um componente que receberá dois números e a operação matemática (soma, subtração, multiplicação ou divisão). Exiba o resultado em um input.
3. Apólice de Seguro

Crie um formulário de apólice para seguro automobilístico. Para isso o consultor preencherá: Nome do segurado, o sexo, a idade e o valor do automóvel. Mediante a regra abaixo calcule e exiba o valor da apólice de seguro:
Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
Se sexo for feminino: Valor da apólice = 8% do valor do automóvel
4. Conversor de temperatura 
Crie um componente que receba uma temperatura em graus Celsius e a converta para Fahrenheit e Kelvin ao clicar no botão "Converter". Exiba os resultados em dois campos de saída.
Fórmulas de conversão:
Fahrenheit (°F) = (Celsius (°C) × 9/5) + 32
Kelvin (K) = Celsius (°C) + 273.15
5. Calculadora de IMC (Índice de Massa Corporal)
Crie um componente que receba o peso (em kg) e a altura (em metros) de uma pessoa. Ao clicar no botão "Calcular", o componente deve calcular o IMC e exibir a classificação de acordo com a tabela a seguir:
Fórmula do IMC:
​
Classificação de IMC:
Abaixo de 18.5: Abaixo do peso
Entre 18.5 e 24.9: Peso normal
Entre 25 e 29.9: Sobrepeso
Entre 30 e 34.9: Obesidade grau I
Entre 35 e 39.9: Obesidade grau II
Acima de 40: Obesidade grau III
