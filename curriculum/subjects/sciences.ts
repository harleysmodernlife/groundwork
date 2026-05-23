import type { SubjectDef } from '../types'
import { sciencesExercises1 } from './sciences-exercises-1'
import { sciencesExercises2 } from './sciences-exercises-2'
import { sciencesExercises3 } from './sciences-exercises-3'
import { sciencesExercises4 } from './sciences-exercises-4'
import { sciencesExercises5 } from './sciences-exercises-5'
import { sciencesExercises6 } from './sciences-exercises-6'
import { sciencesExercises7 } from './sciences-exercises-7'
import { sciencesAssessments } from './sciences-assessments'

const sciences: SubjectDef = {
  slug: 'sciences',
  name: 'Sciences',
  description: 'How the natural world works — from the smallest particles to the largest structures. Biology, chemistry, physics, earth science, and astronomy.',
  icon: '🔬',
  order: 8,
  courses: [
    {
      slug: 'scientific-method',
      name: 'Scientific Thinking & the Scientific Method',
      description: 'How science works, how to evaluate evidence, and how to think like a scientist.',
      order: 1,
      estimatedHours: 2,
      assessment: sciencesAssessments['scientific-method'],
      modules: [
        {
          slug: 'scientific-method',
          name: 'The Scientific Method',
          order: 1,
          lessons: [
            { slug: 'observation-and-hypothesis', name: 'Observation, Questions, and Hypothesis', order: 1, exercises: sciencesExercises1['observation-and-hypothesis'] },
            { slug: 'experiments-and-controls', name: 'Experiments, Controls, and Variables', order: 2, exercises: sciencesExercises1['experiments-and-controls'] },
            { slug: 'data-and-conclusions', name: 'Data, Analysis, and Drawing Conclusions', order: 3, exercises: sciencesExercises1['data-and-conclusions'] },
            { slug: 'peer-review-and-replication', name: 'Peer Review, Replication, and Scientific Consensus', order: 4, exercises: sciencesExercises1['peer-review-and-replication'] },
          ],
        },
      ],
    },
    {
      slug: 'biology',
      name: 'Biology: Life & Living Systems',
      description: 'The science of life — cells, genetics, evolution, and ecology.',
      order: 2,
      estimatedHours: 6,
      prerequisites: ['scientific-method'],
      assessment: sciencesAssessments['biology'],
      modules: [
        {
          slug: 'cell-biology',
          name: 'Cell Biology',
          order: 1,
          lessons: [
            { slug: 'cell-theory', name: 'Cell Theory and Types of Cells', order: 1, exercises: sciencesExercises1['cell-theory'] },
            { slug: 'cell-structure', name: 'Cell Structure and Organelles', order: 2, exercises: sciencesExercises1['cell-structure'] },
            { slug: 'cell-processes', name: 'Photosynthesis and Cellular Respiration', order: 3, exercises: sciencesExercises1['cell-processes'] },
            { slug: 'cell-division', name: 'Mitosis, Meiosis, and Cell Division', order: 4, exercises: sciencesExercises2['cell-division'] },
          ],
        },
        {
          slug: 'genetics',
          name: 'Genetics',
          order: 2,
          lessons: [
            { slug: 'dna-and-genes', name: 'DNA, Genes, and Chromosomes', order: 1, exercises: sciencesExercises2['dna-and-genes'] },
            { slug: 'heredity', name: 'Heredity and Mendelian Genetics', order: 2, exercises: sciencesExercises2['heredity'] },
            { slug: 'mutations-and-variation', name: 'Mutations and Genetic Variation', order: 3, exercises: sciencesExercises2['mutations-and-variation'] },
            { slug: 'biotechnology', name: 'Biotechnology and Genetic Engineering', order: 4, exercises: sciencesExercises2['biotechnology'] },
          ],
        },
        {
          slug: 'evolution-and-ecology',
          name: 'Evolution and Ecology',
          order: 3,
          lessons: [
            { slug: 'natural-selection', name: 'Natural Selection and Evolution', order: 1, exercises: sciencesExercises2['natural-selection'] },
            { slug: 'classification-of-life', name: 'Classification of Living Things', order: 2, exercises: sciencesExercises2['classification-of-life'] },
            { slug: 'ecosystems', name: 'Ecosystems and Food Webs', order: 3, exercises: sciencesExercises3['ecosystems'] },
            { slug: 'biodiversity', name: 'Biodiversity and Conservation', order: 4, exercises: sciencesExercises3['biodiversity'] },
          ],
        },
      ],
    },
    {
      slug: 'chemistry',
      name: 'Chemistry: Matter & Reactions',
      description: 'The science of matter — atoms, bonds, reactions, and the periodic table.',
      order: 3,
      estimatedHours: 6,
      prerequisites: ['scientific-method'],
      assessment: sciencesAssessments['chemistry'],
      modules: [
        {
          slug: 'atomic-structure',
          name: 'Atomic Structure and the Periodic Table',
          order: 1,
          lessons: [
            { slug: 'atoms-and-elements', name: 'Atoms, Elements, and the Periodic Table', order: 1, exercises: sciencesExercises3['atoms-and-elements'] },
            { slug: 'atomic-structure', name: 'Protons, Neutrons, and Electrons', order: 2, exercises: sciencesExercises3['atomic-structure'] },
            { slug: 'electron-configuration', name: 'Electron Configuration and Periodicity', order: 3, exercises: sciencesExercises3['electron-configuration'] },
            { slug: 'isotopes-and-radioactivity', name: 'Isotopes and Radioactivity', order: 4, exercises: sciencesExercises3['isotopes-and-radioactivity'] },
          ],
        },
        {
          slug: 'chemical-bonding',
          name: 'Chemical Bonding and Compounds',
          order: 2,
          lessons: [
            { slug: 'ionic-bonds', name: 'Ionic Bonds and Salts', order: 1, exercises: sciencesExercises3['ionic-bonds'] },
            { slug: 'covalent-bonds', name: 'Covalent Bonds and Molecules', order: 2, exercises: sciencesExercises4['covalent-bonds'] },
            { slug: 'naming-compounds', name: 'Naming Chemical Compounds', order: 3, exercises: sciencesExercises4['naming-compounds'] },
          ],
        },
        {
          slug: 'chemical-reactions',
          name: 'Chemical Reactions',
          order: 3,
          lessons: [
            { slug: 'balancing-equations', name: 'Balancing Chemical Equations', order: 1, exercises: sciencesExercises4['balancing-equations'] },
            { slug: 'types-of-reactions', name: 'Types of Chemical Reactions', order: 2, exercises: sciencesExercises4['types-of-reactions'] },
            { slug: 'acids-and-bases', name: 'Acids, Bases, and pH', order: 3, exercises: sciencesExercises4['acids-and-bases'] },
            { slug: 'stoichiometry', name: 'Stoichiometry: Moles and Mass', order: 4, exercises: sciencesExercises4['stoichiometry'] },
          ],
        },
      ],
    },
    {
      slug: 'physics',
      name: 'Physics: Forces, Energy & Motion',
      description: 'The science of how things move, what forces act on them, and how energy transforms.',
      order: 4,
      estimatedHours: 6,
      prerequisites: ['scientific-method'],
      assessment: sciencesAssessments['physics'],
      modules: [
        {
          slug: 'mechanics',
          name: 'Mechanics: Motion and Forces',
          order: 1,
          lessons: [
            { slug: 'kinematics', name: 'Kinematics: Describing Motion', order: 1, exercises: sciencesExercises4['kinematics'] },
            { slug: 'newtons-laws', name: 'Newton\'s Three Laws of Motion', order: 2, exercises: sciencesExercises5['newtons-laws'] },
            { slug: 'gravity', name: 'Gravity and Gravitational Force', order: 3, exercises: sciencesExercises5['gravity'] },
            { slug: 'friction-and-momentum', name: 'Friction, Momentum, and Impulse', order: 4, exercises: sciencesExercises5['friction-and-momentum'] },
          ],
        },
        {
          slug: 'energy-and-waves',
          name: 'Energy and Waves',
          order: 2,
          lessons: [
            { slug: 'work-and-energy', name: 'Work, Energy, and Conservation of Energy', order: 1, exercises: sciencesExercises5['work-and-energy'] },
            { slug: 'heat-and-thermodynamics', name: 'Heat and Thermodynamics', order: 2, exercises: sciencesExercises5['heat-and-thermodynamics'] },
            { slug: 'waves', name: 'Waves: Sound and Light', order: 3, exercises: sciencesExercises5['waves'] },
            { slug: 'electricity-and-magnetism', name: 'Electricity and Magnetism', order: 4, exercises: sciencesExercises5['electricity-and-magnetism'] },
          ],
        },
      ],
    },
    {
      slug: 'earth-science',
      name: 'Earth & Environmental Science',
      description: 'Earth\'s structure, atmosphere, climate, and the human impact on our planet.',
      order: 5,
      estimatedHours: 4,
      assessment: sciencesAssessments['earth-science'],
      modules: [
        {
          slug: 'earth-structure',
          name: 'Earth\'s Structure and Geology',
          order: 1,
          lessons: [
            { slug: 'earth-layers', name: 'Earth\'s Layers: Crust, Mantle, and Core', order: 1, exercises: sciencesExercises6['earth-layers'] },
            { slug: 'plate-tectonics', name: 'Plate Tectonics and Continental Drift', order: 2, exercises: sciencesExercises6['plate-tectonics'] },
            { slug: 'rocks-and-minerals', name: 'Rocks, Minerals, and the Rock Cycle', order: 3, exercises: sciencesExercises6['rocks-and-minerals'] },
            { slug: 'earthquakes-and-volcanoes', name: 'Earthquakes and Volcanoes', order: 4, exercises: sciencesExercises6['earthquakes-and-volcanoes'] },
          ],
        },
        {
          slug: 'atmosphere-and-climate',
          name: 'Atmosphere and Climate',
          order: 2,
          lessons: [
            { slug: 'the-atmosphere', name: 'The Atmosphere: Layers and Composition', order: 1, exercises: sciencesExercises6['the-atmosphere'] },
            { slug: 'weather-systems', name: 'Weather Systems and Meteorology', order: 2, exercises: sciencesExercises6['weather-systems'] },
            { slug: 'climate-and-climate-change', name: 'Climate vs Weather, and Climate Change', order: 3, exercises: sciencesExercises6['climate-and-climate-change'] },
            { slug: 'human-environmental-impact', name: 'Human Impact on the Environment', order: 4, exercises: sciencesExercises7['human-environmental-impact'] },
          ],
        },
      ],
    },
    {
      slug: 'astronomy',
      name: 'Astronomy & Space',
      description: 'The universe beyond our planet — from the solar system to galaxies and the Big Bang.',
      order: 6,
      estimatedHours: 4,
      assessment: sciencesAssessments['astronomy'],
      modules: [
        {
          slug: 'solar-system',
          name: 'The Solar System',
          order: 1,
          lessons: [
            { slug: 'the-sun', name: 'The Sun: Our Star', order: 1, exercises: sciencesExercises7['the-sun'] },
            { slug: 'planets', name: 'The Planets of Our Solar System', order: 2, exercises: sciencesExercises7['planets'] },
            { slug: 'moons-and-asteroids', name: 'Moons, Asteroids, and Comets', order: 3, exercises: sciencesExercises7['moons-and-asteroids'] },
          ],
        },
        {
          slug: 'stars-and-universe',
          name: 'Stars and the Universe',
          order: 2,
          lessons: [
            { slug: 'stars-and-stellar-evolution', name: 'Stars: Formation, Life, and Death', order: 1, exercises: sciencesExercises7['stars-and-stellar-evolution'] },
            { slug: 'galaxies', name: 'Galaxies and the Structure of the Universe', order: 2, exercises: sciencesExercises7['galaxies'] },
            { slug: 'the-big-bang', name: 'The Big Bang and the Expanding Universe', order: 3, exercises: sciencesExercises7['the-big-bang'] },
            { slug: 'space-exploration', name: 'Space Exploration: History and Future', order: 4, exercises: sciencesExercises7['space-exploration'] },
          ],
        },
      ],
    },
  ],
}

export default sciences
