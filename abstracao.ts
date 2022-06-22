export module Banco {
  export interface Taxa {
    MudarTaxa(valor: number);
  }
  export class ContaCorrente implements Taxa {
    MudarTaxa(valor: number) { }
  }
}
