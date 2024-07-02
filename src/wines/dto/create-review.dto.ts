export class CreateReviewDto {
    readonly username: string;
    readonly isPremium: boolean;
    readonly rating: number;
    readonly comment: string;
    readonly date?: Date;  // Hacer la fecha opcional
  }
  