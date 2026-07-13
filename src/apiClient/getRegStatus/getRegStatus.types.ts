export type RegCountPerBranch = {
    Oyo: number;
    Lagos: number;
    Kwara: number;
    Kogi: number;
    Ogun: number;
    Edo: number;
};

export type GetRegStatusResponse =
    | {
          success: true;
          branchCounts: RegCountPerBranch;
      }
    | {
          success: false;
          debug: object;
      };