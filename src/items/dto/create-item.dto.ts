import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, isString, IsString, MaxLength, Min, min } from 'class-validator';

export class CreateItemDto{
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  @Type(()=>Number)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}