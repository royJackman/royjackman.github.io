import { Injectable } from '@angular/core';

@Injectable()
export class VoteDistributionConstants {
  CalculationType = {
    electoralCollege: {id: 1},
    population: {id: 2},
    economicOutput: {id: 3}
  }

  StateData = [
    { id: 'US-AL', votes: 2123372, value: 0, eVotes: 9 },
    { id: 'US-AK', votes: 318608, value: 0, eVotes: 3 },
    { id: 'US-AZ', votes: 2573165, value: 0, eVotes: 11 },
    { id: 'US-AR', votes: 1130635, value: 0, eVotes: 6 },
    { id: 'US-CA', votes: 14181595, value: 0, eVotes: 55 },
    { id: 'US-CO', votes: 2780247, value: 0, eVotes: 9 },
    { id: 'US-CT', votes: 1644920, value: 0, eVotes: 7 },
    { id: 'US-DE', votes: 443814, value: 0, eVotes: 3 },
    // DC: {id: 'US-AL', votes: 311268, value: 0, eVotes: 3 },
    { id: 'US-FL', votes: 9420039, value: 0, eVotes: 29 },
    { id: 'US-GA', votes: 4114732, value: 0, eVotes: 16 },
    { id: 'US-HI', votes: 428937, value: 0, eVotes: 4 },
    { id: 'US-ID', votes: 690255, value: 0, eVotes: 4 },
    { id: 'US-IL', votes: 5536424, value: 0, eVotes: 20 },
    { id: 'US-IN', votes: 2734958, value: 0, eVotes: 11 },
    { id: 'US-IA', votes: 1566031, value: 0, eVotes: 6 },
    { id: 'US-KS', votes: 1184402, value: 0, eVotes: 6 },
    { id: 'US-KY', votes: 1924149, value: 0, eVotes: 8 },
    { id: 'US-LA', votes: 2029032, value: 0, eVotes: 8 },
    { id: 'US-ME', votes: 747927, value: 0, eVotes: 4 },
    { id: 'US-MD', votes: 2781446, value: 0, eVotes: 10 },
    { id: 'US-MA', votes: 3325046, value: 0, eVotes: 11 },
    { id: 'US-MI', votes: 4799284, value: 0, eVotes: 16 },
    { id: 'US-MN', votes: 2944813, value: 0, eVotes: 10 },
    { id: 'US-MS', votes: 1209357, value: 0, eVotes: 6 },
    { id: 'US-MO', votes: 2808605, value: 0, eVotes: 10 },
    { id: 'US-MT', votes: 497147, value: 0, eVotes: 3 },
    { id: 'US-NE', votes: 844227, value: 0, eVotes: 5 },
    { id: 'US-NV', votes: 1125385, value: 0, eVotes: 6 },
    { id: 'US-NH', votes: 744296, value: 0, eVotes: 4 },
    { id: 'US-NJ', votes: 3874046, value: 0, eVotes: 14 },
    { id: 'US-NM', votes: 798319, value: 0, eVotes: 5 },
    { id: 'US-NY', votes: 7721453, value: 0, eVotes: 29 },
    { id: 'US-NC', votes: 4741564, value: 0, eVotes: 15 },
    { id: 'US-ND', votes: 344360, value: 0, eVotes: 3 },
    { id: 'US-OH', votes: 5496487, value: 0, eVotes: 18 },
    { id: 'US-OK', votes: 1452992, value: 0, eVotes: 7 },
    { id: 'US-OR', votes: 2001336, value: 0, eVotes: 7 },
    { id: 'US-PA', votes: 6165478, value: 0, eVotes: 20 },
    { id: 'US-RI', votes: 464144, value: 0, eVotes: 4 },
    { id: 'US-SC', votes: 2103027, value: 0, eVotes: 9 },
    { id: 'US-SD', votes: 370093, value: 0, eVotes: 3 },
    { id: 'US-TN', votes: 2508027, value: 0, eVotes: 11 },
    { id: 'US-TX', votes: 8969226, value: 0, eVotes: 38 },
    { id: 'US-UT', votes: 1131430, value: 0, eVotes: 6 },
    { id: 'US-VT', votes: 315067, value: 0, eVotes: 3 },
    { id: 'US-VA', votes: 3984631, value: 0, eVotes: 13 },
    { id: 'US-WA', votes: 3317019, value: 0, eVotes: 12 },
    { id: 'US-WV', votes: 714423, value: 0, eVotes: 5 },
    { id: 'US-WI', votes: 2976150, value: 0, eVotes: 10 },
    { id: 'US-WY', votes: 255849, value: 0, eVotes: 3 }
  ]
}
