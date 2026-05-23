import type { ExerciseDef } from '../types'

function mc(
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  order: number
): ExerciseDef {
  return { question, type: 'MULTIPLE_CHOICE', options, correctAnswer, explanation, order }
}

export const mathExercises9: Record<string, ExerciseDef[]> = {
  'chain-product-quotient': [
    mc('The chain rule is used when:', ['Adding two functions', 'Differentiating a composite function f(g(x))', 'Multiplying two functions', 'Dividing constants'], 'Differentiating a composite function f(g(x))', 'Chain rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x). Differentiate the outer function, then multiply by the derivative of the inner.', 1),
    mc('What is d/dx[sin(3x)] using the chain rule?', ['cos(3x)', '3cos(3x)', '−3cos(3x)', 'sin(3)'], '3cos(3x)', 'Outer: sin(u), derivative is cos(u). Inner: 3x, derivative is 3. Result: cos(3x) · 3 = 3cos(3x).', 2),
    mc('The product rule states d/dx[f·g] = ?', ['f\'·g\'', 'f\'·g + f·g\'', 'f·g′/g', '(f+g)/(f′+g′)'], 'f\'·g + f·g\'', 'Product rule: "first times derivative of second, plus second times derivative of first."', 3),
    mc('The quotient rule for d/dx[f/g] is:', ['f\'g + g\'f / g²', '(f\'g − fg\') / g²', '(fg\' − f\'g) / g²', 'f\'/g\''], '(f\'g − fg\') / g²', 'Quotient rule: "lo d-hi minus hi d-lo, over lo squared." = (f\'g − fg\')/g².', 4),
    mc('What is d/dx[x² · sin(x)]?', ['2x · cos(x)', '2x · sin(x) + x² · cos(x)', 'x² · cos(x)', '2x + cos(x)'], '2x · sin(x) + x² · cos(x)', 'Product rule: f=x², f\'=2x, g=sin(x), g\'=cos(x). Result: 2x·sin(x) + x²·cos(x).', 5),
  ],
  'applications-of-derivatives': [
    mc('At a local maximum, the derivative is:', ['Positive', 'Negative', 'Zero', 'Undefined'], 'Zero', 'At local maxima and minima, the tangent line is horizontal — f\'(x) = 0. These are critical points.', 1),
    mc('If f\'(x) > 0 on an interval, the function is:', ['Decreasing', 'Constant', 'Increasing', 'Concave down'], 'Increasing', 'Positive derivative means the slope is positive — the function is going up (increasing).', 2),
    mc('What does the second derivative test tell you?', ['Where the function is zero', 'Whether a critical point is a max or min based on concavity', 'The average rate of change', 'Where the function crosses the x-axis'], 'Whether a critical point is a max or min based on concavity', 'f\'\'(a) < 0 → local max (concave down). f\'\'(a) > 0 → local min (concave up). f\'\'(a) = 0 → inconclusive.', 3),
    mc('In optimization problems, you find a maximum or minimum by:', ['Guessing and checking values', 'Setting the derivative equal to zero and solving', 'Integrating the function', 'Finding the y-intercept'], 'Setting the derivative equal to zero and solving', 'Critical points where f\'(x) = 0 are candidates for maxima/minima. Then verify using the second derivative or other tests.', 4),
    mc('Related rates problems involve:', ['Differentiating functions with multiple variables simultaneously with respect to time', 'Finding derivatives using only the chain rule', 'Calculating speed from a position function', 'Adding rates of two separate functions'], 'Differentiating functions with multiple variables simultaneously with respect to time', 'Related rates use implicit differentiation with respect to time to relate how multiple quantities change together.', 5),
  ],
  'the-integral': [
    mc('What is integration the reverse of?', ['Multiplication', 'Differentiation', 'Addition', 'Factoring'], 'Differentiation', 'Integration (antidifferentiation) undoes differentiation. ∫f\'(x)dx = f(x) + C.', 1),
    mc('What is ∫2x dx?', ['2', 'x² + C', '2x² + C', 'x + C'], 'x² + C', 'Reverse power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. ∫2x dx = 2 · x²/2 + C = x² + C.', 2),
    mc('What does a definite integral ∫ₐᵇ f(x)dx represent geometrically?', ['The slope of f on [a,b]', 'The signed area between f(x) and the x-axis from a to b', 'The maximum value of f on [a,b]', 'The length of the curve from a to b'], 'The signed area between f(x) and the x-axis from a to b', 'A definite integral calculates the net signed area — positive above x-axis, negative below.', 3),
    mc('What is the constant of integration C in indefinite integrals?', ['Always zero', 'The initial condition', 'An arbitrary constant representing all antiderivatives', 'The x-intercept of the antiderivative'], 'An arbitrary constant representing all antiderivatives', 'Every function has infinitely many antiderivatives, differing by a constant. C accounts for all of them.', 4),
    mc('What is ∫cos(x) dx?', ['−sin(x) + C', 'sin(x) + C', 'cos(x) + C', '−cos(x) + C'], 'sin(x) + C', 'The antiderivative of cos(x) is sin(x), because d/dx[sin(x)] = cos(x).', 5),
  ],
  'fundamental-theorem': [
    mc('What does the Fundamental Theorem of Calculus connect?', ['Algebra and geometry', 'Differentiation and integration', 'Limits and sequences', 'Polynomials and trig functions'], 'Differentiation and integration', 'The FTC bridges differentiation and integration — showing they are inverse operations.', 1),
    mc('According to the FTC Part 2, ∫ₐᵇ f(x)dx = ?', ['f(b) + f(a)', 'f(b) · f(a)', 'F(b) − F(a), where F is any antiderivative of f', 'F(a) − F(b)'], 'F(b) − F(a), where F is any antiderivative of f', 'FTC Part 2: to evaluate a definite integral, find any antiderivative F and compute F(b) − F(a).', 2),
    mc('Evaluate ∫₀² 3x² dx.', ['4', '8', '12', '6'], '8', 'F(x) = x³. F(2) − F(0) = 8 − 0 = 8.', 3),
    mc('FTC Part 1 states that d/dx[∫ₐˣ f(t)dt] = ?', ['∫ₐˣ f\'(t)dt', 'f(x)', 'F(x) − F(a)', 'f(a)'], 'f(x)', 'FTC Part 1: the derivative of a variable-upper-bound integral gives back the integrand: d/dx[∫ₐˣ f(t)dt] = f(x).', 4),
    mc('Which notation means "evaluate F at b then subtract F at a"?', ['F(b+a)', '[F(x)]ₐᵇ', 'F(x)ₐᵇ or [F(x)]ₐᵇ', 'F(b/a)'], 'F(x)ₐᵇ or [F(x)]ₐᵇ', 'The notation [F(x)]ₐᵇ means F(b) − F(a) — standard shorthand for evaluating definite integrals.', 5),
  ],
  'integration-techniques': [
    mc('What is u-substitution used for?', ['Integrating products of functions', 'Reversing the chain rule', 'Integrating rational functions by partial fractions', 'Simplifying derivatives'], 'Reversing the chain rule', 'U-substitution is the integration analog of the chain rule — let u = inner function to simplify the integral.', 1),
    mc('To evaluate ∫2x·cos(x²)dx, let u = ?', ['cos(x)', 'x²', '2x', 'x'], 'x²', 'Let u = x², then du = 2x dx. The integral becomes ∫cos(u)du = sin(u)+C = sin(x²)+C.', 2),
    mc('Integration by parts is based on the reverse of:', ['The chain rule', 'The power rule', 'The product rule', 'The quotient rule'], 'The product rule', 'Integration by parts: ∫u dv = uv − ∫v du. It reverses the product rule.', 3),
    mc('Which integral requires integration by parts?', ['∫x² dx', '∫sin(x)dx', '∫x·eˣ dx', '∫eˣ dx'], '∫x·eˣ dx', '∫x·eˣ dx is a product of two different types — use IBP: u=x, dv=eˣdx.', 4),
    mc('What is ∫eˣ dx?', ['eˣ/x + C', 'xeˣ + C', 'eˣ + C', 'eˣ⁺¹/(x+1) + C'], 'eˣ + C', 'eˣ is its own derivative AND its own antiderivative: ∫eˣ dx = eˣ + C.', 5),
  ],
  'applications-of-integrals': [
    mc('To find the area between two curves f(x) and g(x) where f ≥ g on [a,b], you compute:', ['∫ₐᵇ f(x)·g(x) dx', '∫ₐᵇ [f(x) − g(x)] dx', '∫ₐᵇ [f(x) + g(x)] dx', '∫ₐᵇ f(x)/g(x) dx'], '∫ₐᵇ [f(x) − g(x)] dx', 'Area between curves = integral of the top function minus the bottom function over the interval.', 1),
    mc('The average value of f on [a,b] is:', ['f(a) + f(b) / 2', '1/(b−a) · ∫ₐᵇ f(x)dx', '∫ₐᵇ f(x)dx', '(b−a) · f\'(a)'], '1/(b−a) · ∫ₐᵇ f(x)dx', 'Average value formula: f_avg = 1/(b−a) · ∫ₐᵇ f(x)dx.', 2),
    mc('If position is s(t), velocity is v(t) = s\'(t). How do you find displacement from t=0 to t=3?', ['v(3) − v(0)', '∫₀³ v(t) dt', 's\'(3)', 'v(0) × 3'], '∫₀³ v(t) dt', 'Displacement = ∫ₐᵇ v(t) dt = s(b) − s(a). (Total distance uses |v(t)|.)', 3),
    mc('The disc method for finding volume rotates a region around an axis and uses:', ['Rectangles', '∫π[f(x)]² dx', '∫f(x)·g(x)dx', '∑f(xᵢ)Δx'], '∫π[f(x)]² dx', 'Rotating a curve around the x-axis creates discs with radius f(x). Volume = ∫π[f(x)]² dx.', 4),
    mc('What does the accumulation interpretation of an integral mean?', ['The integral counts the number of terms', 'The integral represents total accumulation of a rate over an interval', 'The integral finds the derivative at each point', 'The integral gives the probability of an event'], 'The integral represents total accumulation of a rate over an interval', 'If f(t) is a rate (speed, growth rate), ∫ₐᵇ f(t)dt is total accumulated quantity (distance, total growth).', 5),
  ],
  'collecting-data': [
    mc('What is a population in statistics?', ['The number of people in a city', 'The entire group of interest in a study', 'A sample taken from a group', 'The most common value in a dataset'], 'The entire group of interest in a study', 'The population is the complete set you want to study. A sample is a subset of the population.', 1),
    mc('What makes a sample random?', ['It is large', 'Every member of the population has an equal chance of being selected', 'It excludes outliers', 'It is chosen by experts'], 'Every member of the population has an equal chance of being selected', 'A random sample avoids selection bias — everyone has an equal chance, making it representative.', 2),
    mc('What is sampling bias?', ['Using too small a sample', 'A systematic error making the sample unrepresentative of the population', 'Measuring the wrong variable', 'Using the wrong statistical formula'], 'A systematic error making the sample unrepresentative of the population', 'Sampling bias skews results — like surveying only online users about internet access.', 3),
    mc('What type of data is "favorite color"?', ['Quantitative', 'Continuous', 'Categorical (qualitative)', 'Ordinal numerical'], 'Categorical (qualitative)', 'Categorical data describes qualities or categories, not quantities — like color, gender, or yes/no answers.', 4),
    mc('What is the difference between an experiment and an observational study?', ['Experiments are cheaper', 'In an experiment, researchers assign treatments; in observational studies, they only observe', 'Observational studies are more reliable', 'Experiments use larger samples'], 'In an experiment, researchers assign treatments; in observational studies, they only observe', 'Experiments can establish causation; observational studies can only find correlations.', 5),
  ],
}
