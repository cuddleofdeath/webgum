/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { Abi, AbiInterface } from "../Abi";
const _abi = {
  types: [
    {
      typeId: 0,
      type: "()",
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: "[_; 5]",
      components: [
        {
          name: "__array_element",
          type: 11,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 2,
      type: "b256",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 3,
      type: "bool",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 4,
      type: "enum Identity",
      components: [
        {
          name: "Address",
          type: 7,
          typeArguments: null,
        },
        {
          name: "ContractId",
          type: 8,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: "enum InvalidError",
      components: [
        {
          name: "IncorrectAssetId",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotEnoughTokens",
          type: 0,
          typeArguments: null,
        },
        {
          name: "CantReview",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidRating",
          type: 0,
          typeArguments: null,
        },
        {
          name: "MaxBuyers",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotProjectOwner",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 6,
      type: "str[59]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 7,
      type: "struct Address",
      components: [
        {
          name: "value",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: "struct ContractId",
      components: [
        {
          name: "value",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: "struct Project",
      components: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
        {
          name: "price",
          type: 11,
          typeArguments: null,
        },
        {
          name: "max_buyers",
          type: 11,
          typeArguments: null,
        },
        {
          name: "buyer_count",
          type: 11,
          typeArguments: null,
        },
        {
          name: "owner_address",
          type: 4,
          typeArguments: null,
        },
        {
          name: "metadata",
          type: 6,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 10,
      type: "struct Vector",
      components: [
        {
          name: "inner",
          type: 1,
          typeArguments: null,
        },
        {
          name: "current_ix",
          type: 11,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 11,
      type: "u64",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "buy_project",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "buyer",
          type: 4,
          typeArguments: null,
        },
        {
          name: "index",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "get_bought_project",
      output: {
        name: "",
        type: 9,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "buyer",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "get_buyer_list_length",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "id",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "get_buyer_vector",
      output: {
        name: "",
        type: 10,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "creator",
          type: 4,
          typeArguments: null,
        },
        {
          name: "index",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "get_created_project",
      output: {
        name: "",
        type: 9,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "creator",
          type: 4,
          typeArguments: null,
        },
        {
          name: "index",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "get_created_project_id",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "creator",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "get_creator_list_length",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "id",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "get_creator_vector",
      output: {
        name: "",
        type: 10,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "get_project",
      output: {
        name: "",
        type: 9,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "get_project_index",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "get_project_ratings_ix",
      output: {
        name: "",
        type: 10,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "get_projects_list_length",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
        {
          name: "wallet",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "has_bought_project",
      output: {
        name: "",
        type: 3,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "price",
          type: 11,
          typeArguments: null,
        },
        {
          name: "max_buyers",
          type: 11,
          typeArguments: null,
        },
        {
          name: "metadata",
          type: 6,
          typeArguments: null,
        },
      ],
      name: "list_project",
      output: {
        name: "",
        type: 9,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
        {
          name: "rating",
          type: 11,
          typeArguments: null,
        },
      ],
      name: "review_project",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "project_id",
          type: 11,
          typeArguments: null,
        },
        {
          name: "price",
          type: 11,
          typeArguments: null,
        },
        {
          name: "max_buyers",
          type: 11,
          typeArguments: null,
        },
        {
          name: "metadata",
          type: 6,
          typeArguments: null,
        },
      ],
      name: "update_project",
      output: {
        name: "",
        type: 9,
        typeArguments: null,
      },
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
    {
      logId: 5,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
    },
  ],
};

export class Abi__factory {
  static readonly abi = _abi;
  static createInterface(): AbiInterface {
    return new Interface(_abi) as unknown as AbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): Abi {
    return new Contract(id, _abi, walletOrProvider) as unknown as Abi;
  }
}
