
export interface CpuInfo {
  name: string;
  codeName: string;
  maxTdp: string;
  technology: string;
  coreVoltage: string;
  specification: string;
  family: string;
  model: string;
  stepping: string;
  revision: string;
  instructions: string;
  clocks: {
    coreSpeed: string;
    multiplier: string;
    busSpeed: string;
  };
  cache: {
    l1Data: string;
    l1Inst: string;
    l2: string;
    l3: string;
  };
  cores: number;
  threads: number;
}

export interface MainboardInfo {
  manufacturer: string;
  model: string;
  chipset: string;
  southbridge: string;
  bios: {
    brand: string;
    version: string;
    date: string;
  };
}

export interface MemoryInfo {
  type: string;
  size: string;
  channels: string;
  dramFrequency: string;
  casLatency: string;
  rasToCasDelay: string;
  rasPrecharge: string;
  cycleTime: string;
}

export interface GraphicsInfo {
  gpu: {
    name: string;
    manufacturer: string;
    technology: string;
  };
  clocks: {
    core: string;
    memory: string;
  };
  memory: {
    size: string;
    type: string;
    busWidth: string;
  };
}

export interface SystemInfo {
  cpu: CpuInfo;
  mainboard: MainboardInfo;
  memory: MemoryInfo;
  graphics: GraphicsInfo;
}
