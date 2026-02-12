import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsISO8601,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import { EventLevel } from '../models/event-level.enum';

export class GetEventsQueryDto {
  @IsOptional()
  @IsISO8601()
  from?: string;

  @IsOptional()
  @IsISO8601()
  to?: string;

  @IsOptional()
  @Transform(({ value }: { value: string | undefined }) =>
    typeof value === 'string' ? value.toUpperCase() : value,
  )
  @IsEnum(EventLevel)
  minLevel?: EventLevel;

  @IsOptional()
  @Transform(({ value }: { value: string | undefined }) =>
    value === undefined ? 50 : Number(value),
  )
  @IsInt()
  @Min(1)
  @Max(200)
  limit = 50;

  @IsOptional()
  @Transform(({ value }: { value: string | undefined }) =>
    value === undefined ? 0 : Number(value),
  )
  @IsInt()
  @Min(0)
  offset = 0;
}

