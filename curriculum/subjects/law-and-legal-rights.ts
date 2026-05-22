import type { SubjectDef } from '../types'
import { lawExercises1 } from './law-and-legal-rights-exercises-1'
import { lawExercises2 } from './law-and-legal-rights-exercises-2'
import { lawExercises3 } from './law-and-legal-rights-exercises-3'
import { lawExercises4 } from './law-and-legal-rights-exercises-4'
import { lawExercises5 } from './law-and-legal-rights-exercises-5'
import { lawExercises6 } from './law-and-legal-rights-exercises-6'
import { lawExercises7 } from './law-and-legal-rights-exercises-7'
import { lawExercises8 } from './law-and-legal-rights-exercises-8'
import { lawExercises9 } from './law-and-legal-rights-exercises-9'
import { lawExercises10 } from './law-and-legal-rights-exercises-10'

const lawAndLegalRights: SubjectDef = {
  slug: 'law-and-legal-rights',
  name: 'Law & Legal Rights',
  description: 'Your rights, how the legal system works, and how to protect yourself — without needing to afford a lawyer for every situation.',
  icon: '⚖️',
  order: 3,
  courses: [
    {
      slug: 'know-your-rights',
      name: 'Know Your Rights',
      description: 'The rights every person in this country has, and how to actually use them.',
      order: 1,
      estimatedHours: 3,
      modules: [
        {
          slug: 'constitutional-rights',
          name: 'Constitutional Rights',
          order: 1,
          lessons: [
            { slug: 'bill-of-rights', name: 'The Bill of Rights in Plain Language', order: 1, exercises: lawExercises1['bill-of-rights'] },
            { slug: 'first-amendment', name: 'Free Speech: What It Does and Doesn\'t Protect', order: 2, exercises: lawExercises1['first-amendment'] },
            { slug: 'fourth-amendment', name: 'Search and Seizure: The Fourth Amendment', order: 3, exercises: lawExercises1['fourth-amendment'] },
            { slug: 'fifth-amendment', name: 'Your Right to Remain Silent', order: 4, exercises: lawExercises1['fifth-amendment'] },
          ],
        },
        {
          slug: 'police-encounters',
          name: 'Police Encounters',
          order: 2,
          lessons: [
            { slug: 'being-stopped-by-police', name: 'What to Do When Stopped by Police', order: 1, exercises: lawExercises1['being-stopped-by-police'] },
            { slug: 'consent-to-search', name: 'Consenting to a Search — and How to Decline', order: 2, exercises: lawExercises2['consent-to-search'] },
            { slug: 'if-you-are-arrested', name: 'If You Are Arrested: Step by Step', order: 3, exercises: lawExercises2['if-you-are-arrested'] },
          ],
        },
        {
          slug: 'due-process',
          name: 'Due Process & Equal Protection',
          order: 3,
          lessons: [
            { slug: 'due-process', name: 'What Due Process Actually Means', order: 1, exercises: lawExercises2['due-process'] },
            { slug: 'equal-protection', name: 'Equal Protection Under the Law', order: 2, exercises: lawExercises2['equal-protection'] },
            { slug: 'civil-vs-criminal', name: 'Civil Law vs Criminal Law: The Difference', order: 3, exercises: lawExercises2['civil-vs-criminal'] },
          ],
        },
      ],
    },
    {
      slug: 'contracts-and-agreements',
      name: 'Contracts & Agreements',
      description: 'How contracts work, how to read them, and how to protect yourself before you sign anything.',
      order: 2,
      estimatedHours: 3,
      modules: [
        {
          slug: 'contract-basics',
          name: 'Contract Basics',
          order: 1,
          lessons: [
            { slug: 'what-makes-a-contract', name: 'What Makes a Contract Legally Binding', order: 1, exercises: lawExercises3['what-makes-a-contract'] },
            { slug: 'verbal-vs-written', name: 'Verbal vs Written Contracts', order: 2, exercises: lawExercises3['verbal-vs-written'] },
            { slug: 'when-contracts-are-void', name: 'When a Contract Is Unenforceable', order: 3, exercises: lawExercises3['when-contracts-are-void'] },
          ],
        },
        {
          slug: 'reading-contracts',
          name: 'Reading and Negotiating Contracts',
          order: 2,
          lessons: [
            { slug: 'key-clauses-to-find', name: 'Clauses You Must Find Before Signing', order: 1, exercises: lawExercises3['key-clauses-to-find'] },
            { slug: 'fine-print-tactics', name: 'Fine Print Tactics Companies Use', order: 2, exercises: lawExercises3['fine-print-tactics'] },
            { slug: 'negotiating-terms', name: 'Negotiating Terms — Even on Standard Contracts', order: 3, exercises: lawExercises4['negotiating-terms'] },
          ],
        },
        {
          slug: 'common-contract-situations',
          name: 'Common Contract Situations',
          order: 3,
          lessons: [
            { slug: 'employment-contracts', name: 'Employment Contracts and Offer Letters', order: 1, exercises: lawExercises4['employment-contracts'] },
            { slug: 'service-agreements', name: 'Service Agreements and Freelance Contracts', order: 2, exercises: lawExercises4['service-agreements'] },
            { slug: 'terms-of-service', name: 'Terms of Service: What You\'re Actually Agreeing To', order: 3, exercises: lawExercises4['terms-of-service'] },
          ],
        },
      ],
    },
    {
      slug: 'tenant-and-housing-rights',
      name: 'Tenant & Housing Rights',
      description: 'What landlords can and can\'t do, your rights as a renter, and how to handle disputes.',
      order: 3,
      estimatedHours: 3,
      modules: [
        {
          slug: 'landlord-tenant-basics',
          name: 'Landlord-Tenant Law',
          order: 1,
          lessons: [
            { slug: 'lease-agreements', name: 'Reading a Lease Agreement', order: 1, exercises: lawExercises4['lease-agreements'] },
            { slug: 'security-deposits', name: 'Security Deposits: Rules and Rights', order: 2, exercises: lawExercises5['security-deposits'] },
            { slug: 'habitability-standards', name: 'The Right to a Habitable Home', order: 3, exercises: lawExercises5['habitability-standards'] },
          ],
        },
        {
          slug: 'tenant-rights-in-practice',
          name: 'Your Rights in Practice',
          order: 2,
          lessons: [
            { slug: 'landlord-entry', name: 'When a Landlord Can and Can\'t Enter', order: 1, exercises: lawExercises5['landlord-entry'] },
            { slug: 'repairs-and-maintenance', name: 'Requesting Repairs and What Happens If They Refuse', order: 2, exercises: lawExercises5['repairs-and-maintenance'] },
            { slug: 'retaliation-protections', name: 'Retaliation: What It Is and How to Document It', order: 3, exercises: lawExercises5['retaliation-protections'] },
            { slug: 'eviction-process', name: 'The Eviction Process Step by Step', order: 4, exercises: lawExercises6['eviction-process'] },
          ],
        },
      ],
    },
    {
      slug: 'employment-law',
      name: 'Employment Law & Worker Rights',
      description: 'What your employer can and can\'t do, wage protections, and what to do if your rights are violated.',
      order: 4,
      estimatedHours: 4,
      modules: [
        {
          slug: 'worker-rights-basics',
          name: 'Worker Rights Basics',
          order: 1,
          lessons: [
            { slug: 'minimum-wage-and-overtime', name: 'Minimum Wage, Overtime, and Wage Theft', order: 1, exercises: lawExercises6['minimum-wage-and-overtime'] },
            { slug: 'employee-vs-contractor', name: 'Employee vs Independent Contractor: It Matters', order: 2, exercises: lawExercises6['employee-vs-contractor'] },
            { slug: 'at-will-employment', name: 'At-Will Employment: What It Really Means', order: 3, exercises: lawExercises6['at-will-employment'] },
          ],
        },
        {
          slug: 'discrimination-and-harassment',
          name: 'Discrimination & Harassment',
          order: 2,
          lessons: [
            { slug: 'protected-classes', name: 'Protected Classes Under Federal Law', order: 1, exercises: lawExercises6['protected-classes'] },
            { slug: 'workplace-harassment', name: 'What Constitutes Illegal Workplace Harassment', order: 2, exercises: lawExercises7['workplace-harassment'] },
            { slug: 'filing-a-complaint', name: 'How to File a Complaint with the EEOC', order: 3, exercises: lawExercises7['filing-a-complaint'] },
          ],
        },
        {
          slug: 'workplace-safety-and-benefits',
          name: 'Safety & Benefits',
          order: 3,
          lessons: [
            { slug: 'osha-basics', name: 'OSHA: Your Right to a Safe Workplace', order: 1, exercises: lawExercises7['osha-basics'] },
            { slug: 'unemployment-insurance', name: 'Unemployment Insurance', order: 2, exercises: lawExercises7['unemployment-insurance'] },
            { slug: 'workers-compensation', name: 'Workers\' Compensation', order: 3, exercises: lawExercises7['workers-compensation'] },
            { slug: 'fmla', name: 'Family and Medical Leave Act (FMLA)', order: 4, exercises: lawExercises7['fmla'] },
          ],
        },
      ],
    },
    {
      slug: 'criminal-law-basics',
      name: 'Criminal Law & the Justice System',
      description: 'How the criminal justice system works from arrest to sentencing, and what rights you have at every step.',
      order: 5,
      estimatedHours: 4,
      modules: [
        {
          slug: 'how-criminal-system-works',
          name: 'How the System Works',
          order: 1,
          lessons: [
            { slug: 'crimes-and-classifications', name: 'Felonies, Misdemeanors, and Infractions', order: 1, exercises: lawExercises8['crimes-and-classifications'] },
            { slug: 'from-arrest-to-trial', name: 'From Arrest to Trial: The Full Process', order: 2, exercises: lawExercises8['from-arrest-to-trial'] },
            { slug: 'plea-deals', name: 'Plea Deals: Why Most Cases Never Go to Trial', order: 3, exercises: lawExercises8['plea-deals'] },
          ],
        },
        {
          slug: 'your-rights-in-the-system',
          name: 'Your Rights in the System',
          order: 2,
          lessons: [
            { slug: 'right-to-counsel', name: 'The Right to an Attorney', order: 1, exercises: lawExercises8['right-to-counsel'] },
            { slug: 'bail-and-pretrial', name: 'Bail, Pretrial Detention, and Innocent Until Proven Guilty', order: 2, exercises: lawExercises8['bail-and-pretrial'] },
            { slug: 'criminal-records', name: 'Criminal Records: Expungement and Sealing', order: 3, exercises: lawExercises8['criminal-records'] },
          ],
        },
      ],
    },
    {
      slug: 'family-law-basics',
      name: 'Family Law Basics',
      description: 'Marriage, divorce, child custody, and what happens to your stuff when you die.',
      order: 6,
      estimatedHours: 3,
      modules: [
        {
          slug: 'marriage-and-divorce',
          name: 'Marriage & Divorce',
          order: 1,
          lessons: [
            { slug: 'legal-aspects-of-marriage', name: 'What Marriage Means Legally', order: 1, exercises: lawExercises9['legal-aspects-of-marriage'] },
            { slug: 'prenuptial-agreements', name: 'Prenuptial Agreements', order: 2, exercises: lawExercises9['prenuptial-agreements'] },
            { slug: 'divorce-process', name: 'The Divorce Process', order: 3, exercises: lawExercises9['divorce-process'] },
            { slug: 'property-division', name: 'How Property Is Divided', order: 4, exercises: lawExercises9['property-division'] },
          ],
        },
        {
          slug: 'children-and-estates',
          name: 'Children & Estates',
          order: 2,
          lessons: [
            { slug: 'child-custody', name: 'Child Custody and Visitation', order: 1, exercises: lawExercises9['child-custody'] },
            { slug: 'child-support', name: 'Child Support: How It\'s Calculated', order: 2, exercises: lawExercises10['child-support'] },
            { slug: 'wills-basics', name: 'Wills: Why You Need One and What Goes In It', order: 3, exercises: lawExercises10['wills-basics'] },
            { slug: 'dying-without-a-will', name: 'What Happens If You Die Without a Will', order: 4, exercises: lawExercises10['dying-without-a-will'] },
          ],
        },
      ],
    },
  ],
}

export default lawAndLegalRights
