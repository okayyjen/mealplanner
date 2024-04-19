/**
 * @generated SignedSource<<e74705206773a1fe5e7881c51c17447c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ShoppingListQuery$variables = {
  rowId: any;
};
export type ShoppingListQuery$data = {
  readonly mealPlan: {
    readonly nameEn: string;
    readonly descriptionEn: string | null;
    readonly person: {
      readonly fullName: string;
    } | null;
    readonly startDate: any | null;
    readonly mealPlanEntries: {
      readonly nodes: ReadonlyArray<{
        readonly meal: {
          readonly id: string;
          readonly nameEn: string;
          readonly ingredients: {
            readonly nodes: ReadonlyArray<{
              readonly id: string;
              readonly name: string;
              readonly quantity: any;
              readonly unit: string;
              readonly productKeyword: string;
              readonly substituteIngredient: {
                readonly name: string;
              } | null;
              readonly substituteReason: ReadonlyArray<string | null> | null;
              readonly matchedProducts: {
                readonly nodes: ReadonlyArray<{
                  readonly id: string;
                  readonly nameEn: string;
                  readonly price: any;
                }>;
              };
            }>;
          };
        } | null;
      }>;
    };
  } | null;
};
export type ShoppingListQuery = {
  variables: ShoppingListQuery$variables;
  response: ShoppingListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameEn",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionEn",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startDate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unit",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "productKeyword",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "substituteReason",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "ProductsConnection",
  "kind": "LinkedField",
  "name": "matchedProducts",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Product",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v6/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "price",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MealPlan",
        "kind": "LinkedField",
        "name": "mealPlan",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "person",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MealPlanEntriesConnection",
            "kind": "LinkedField",
            "name": "mealPlanEntries",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MealPlanEntry",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Meal",
                    "kind": "LinkedField",
                    "name": "meal",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "IngredientsConnection",
                        "kind": "LinkedField",
                        "name": "ingredients",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ingredient",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Ingredient",
                                "kind": "LinkedField",
                                "name": "substituteIngredient",
                                "plural": false,
                                "selections": [
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MealPlan",
        "kind": "LinkedField",
        "name": "mealPlan",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "person",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MealPlanEntriesConnection",
            "kind": "LinkedField",
            "name": "mealPlanEntries",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MealPlanEntry",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Meal",
                    "kind": "LinkedField",
                    "name": "meal",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "IngredientsConnection",
                        "kind": "LinkedField",
                        "name": "ingredients",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ingredient",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Ingredient",
                                "kind": "LinkedField",
                                "name": "substituteIngredient",
                                "plural": false,
                                "selections": [
                                  (v7/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e847ea03001565e6c3a14813eacbb418",
    "id": null,
    "metadata": {},
    "name": "ShoppingListQuery",
    "operationKind": "query",
    "text": "query ShoppingListQuery(\n  $rowId: BigInt!\n) {\n  mealPlan(rowId: $rowId) {\n    nameEn\n    descriptionEn\n    person {\n      fullName\n      id\n    }\n    startDate\n    mealPlanEntries {\n      nodes {\n        meal {\n          id\n          nameEn\n          ingredients {\n            nodes {\n              id\n              name\n              quantity\n              unit\n              productKeyword\n              substituteIngredient {\n                name\n                id\n              }\n              substituteReason\n              matchedProducts {\n                nodes {\n                  id\n                  nameEn\n                  price\n                }\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4010e871a993a52ad24afb2a04ce117";

export default node;
