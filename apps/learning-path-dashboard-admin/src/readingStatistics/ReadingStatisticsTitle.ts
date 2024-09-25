import { ReadingStatistics as TReadingStatistics } from "../api/readingStatistics/ReadingStatistics";

export const READINGSTATISTICS_TITLE_FIELD = "id";

export const ReadingStatisticsTitle = (record: TReadingStatistics): string => {
  return record.id?.toString() || String(record.id);
};
