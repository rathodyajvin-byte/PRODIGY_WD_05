export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  conditionCode: number;
  isDay: number;
  precipitationChance: number;
  description?: string;
}

export interface WeatherTheme {
  gradient: string;
  textColor: string;
  iconColor: string;
  label: string;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  bgColor: string;
}

export interface Lap {
  id: number;
  time: number;
  split: number;
}

export type Player = 'X' | 'O' | null;

export interface WinInfo {
  winner: Player;
  line: number[] | null;
  isDraw: boolean;
}

export type GameMode = 'PvCPU' | 'PvP';

export interface ScoreBoard {
  X: number;
  O: number;
  Draws: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  componentName?: string;
}