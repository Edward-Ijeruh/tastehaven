export const categories = [
  { key: "featured", label: "Featured" },
  { key: "burgers", label: "Burgers" },
  { key: "chicken", label: "Chicken & Sandwiches" },
  { key: "sides", label: "Sides" },
  { key: "drinks", label: "Drinks" },
];

export const menuData: Record<string, any[]> = {
  featured: [
    {
      id: 1,
      tag: "Limited Time",
      name: "Spicy Chicken Sandwich",
      desc: "Crispy chicken, spicy sauce, lettuce, and tomato on a toasted bun.",
      price: 7000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoHPjZnvk7QNIEvGnMA4ZL8szNANLMsh5fDyXGux-bk44397JWuDnfR7jbmgt8T24R9oVruW4nY0en5ez-R538xqEQsexIE0fQhBquMse9gTN0VmeHrxQ66NzH-GjUURhvuPmzjB56fKMXPoIswkpTFPgPnNL5gxnUFyE6SyRgM6pbrbD8D3s_zm5oYW9XkX2fYFqrEcPo8x2eQC_jZGcGkCHUzhi9gvTA9Hpbu4FWbeOn2c7r8mxupUVABRTE05HJ_uAjoxsjS_M",
    },
    {
      id: 10,
      name: "Pepperoni Pizza",
      desc: "A classic favorite with a crispy crust.",
      price: 9000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWileXHY253N51cMfRWL0rU_DLsltqUkpttTMCNaXqx2HknQcd_sT0KBNgxcQPAviwROCXlb15ABBFyKFy1TLUL79mEex2OtuqZSf9IPRLWrNOp9Ku2A_PYRP96X_8Pk4hRENnD0BW24aM5zKvCaIKq8qEP-Jledsh7wu0YwwE9NHp7_Qj8cdKXZaA2TSU6eUboq5m8KK-0O6VeHNLSI4oGSnIxPqQduquatiS8MzJY3fsdqwTsk_8MV5ar6E4nGVk3IEkDr5xZ18",
    },
  ],
  burgers: [
    {
      id: 2,
      name: "Classic Burger",
      desc: "Beef patty, cheese, lettuce, tomato, onion, and pickles on a sesame seed bun.",
      price: 5000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwlQ4x2PbBverYOBGiDXDTTI0oAY_eDXrQmnAfGm9ZieqUv7dhtuFRZ6aFeoTAcuXOKsVjY-bQoQ73g2vel80UmZXyTvjbdnoWnBqcLknwryRzawB7o5az7i8F7uhzmMWTEiVJ8prS9iRtIg3c6NANq2vIvPe7UX1Oii9oiyznvAXdBRxiniqrjdu1B8WCJLsencB_asgANHjVF7jemG-qiwI27BK1d1ax3f6lwHxaGSSYrrzSxCwphOPC2Y3ibtOca3QSQ0HfmaU",
    },
    {
      id: 3,
      name: "Double Cheese Burger",
      desc: "Two beef patties, double cheese, lettuce, tomato, onion, and pickles.",
      price: 7500,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe58eBhkkhOMMA_XGyi_rxpJUrrPCOM-7vF22Nsn_H6TkAA38odb1_1ZCEHzVsiC1UGCsMk6monHWmRIPq726dhLv7Frh-vqUUmY1apBVnlANjr0A4QV74ISMNyr7LO1QJgGhfIxFTHEh4MmX8ydSf3gVv13O1gq5msP0xYLw3HTF06DjmgJoCdgAZ8RmPNYBfpLRHyNylr1eCEBQeUGugyuE9o4Y_Hq5PrF8t6KanEziAvWNOOVU_NBWPT6nMQChPQb1b4gryZ5A",
    },
  ],
  chicken: [
    {
      id: 4,
      name: "Chicken Nuggets",
      desc: "Crispy chicken nuggets served with your choice of dipping sauce.",
      price: 5000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdZ7mpYVI-netJhCZ_Oj7sz4XZMwcUN0bz61MP04jA0sHzwEECz3kiYhM6viEuHU0N14f4ScrKGAlK_ACCPMYjK18bgsyO4tgpBHXg51TaV-PSw1aRKSSIf-DvQIg__DtMnhTV_fHXVm_S0lXPfqWrW9zuL6zO2sTyxnsdnvvIojQ91IRgZdZ3DCwxxDBfNT1W6xI3O3jy6Pb46NshMK9r5samnt8IyVmGrFIOv6wySPNYy9V6cWmFNBGgsknPbllow1HmYJMcoFw",
    },
    {
      id: 5,
      name: "Grilled Chicken Sandwich",
      desc: "Grilled chicken breast, lettuce, tomato, and honey mustard on a toasted bun.",
      price: 6000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC_dFLBtjokaeRPKD5400YJDRSOfH8UlmJpNG9XhBXOzWue9DOBK1D40Ymy3TYHvEpYKOsgffr9eTh1tdSrAM0HNGIsa7ZD00_hA0PLHRCghcxdzmoBZHDk_EvLQ7N0YWOdYlXbov9G6Y-Z2h-HGg078QETkxxnzkDGZkSEherkMKqr3Ds42oNK8IAPmpGT9Rw5_7ANMTQndAhzdAqM9xN6uipf6-mvPD8ikjqLewt8dX6Q-hxJyHAgs_YbPNm9aSe2C8odgmf0GY",
    },
    {
      id: 11,
      name: "Spicy Chicken Wings",
      desc: "Perfectly seasoned and irresistibly spicy.",
      price: 5500,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsyeAwMUuH67zx5Cxzc02HhIsC05pjRXPRyOI29g5NY6RzCupj9axAXEEPE7lqH4zrfthREI6FiX1hS-pmguuXcVnSk6BspBDzx2svjW36on5mG4ZTG5KnI0vzVxVMyndCbyXEufU0HldYYPOPygB0lcTmixBPkHd7bhbS8vkkZfZemEShcg4GEbCWmvB9Njt_F6OAumw7fPbNUXSbu6NduV7KEQToy7sEoqxu1iiUE9dBBz0aXf6ZFQ7Ooy45U6QsGtVr_eVUzo",
    },
  ],
  sides: [
    {
      id: 6,
      name: "French Fries",
      desc: "Crispy golden french fries.",
      price: 2500,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMOuKRgSkacTvnVkfhiXdjur2b2qJg5HqW-rAiJehhnJKwmRE7Fra3Gsp7LpDi_VBv9nJ7Iml3k4rHC881UciTxKoOLLaoWPS1D1QrMe04-vsduV1LYFehmspgYp9qdAGJ1igZbCISO2tKbXCJZ97ksunj0U5_NTQ9OqB012nXn7--iQ3ZGT_wwo32dF2hJVWg42GZsiuEW3PSQYtITRbSgNBmUMSNICX5ev5WRC5PsTBZ5Q0oyd8EBoIBBVEvCgayK9s3Xl9b2Ak",
    },
    {
      id: 7,
      name: "Onion Rings",
      desc: "Golden-brown onion rings.",
      price: 2000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRm2MOXHu1lExmpaOKSmwvbkMKZ0_gvTwiE7V381MqD2oQN27JdVT8NzcIE1szlNUGprpmYwsGRpK4vEcuCuKzayxDkk0SEoN8q_au2zXoMrTitfP0oH4Rmjxb0tlQflz-1DJBOfsXexlQA-qk_ZmhkDfPtDSHgPB-o929KzYv0kxDp5puYsmcjs_JDipOhaHz4mszRJ839vqu8gfxTBeuT8LSfqWpBkDkMXaJ6UHaGfc0fRHdHKV9c_aACKNcT79wjADNzs3SaRI",
    },
  ],
  drinks: [
    {
      id: 8,
      name: "Soft Drinks",
      desc: "Choose from a variety of refreshing soft drinks.",
      price: 800,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWqid-dhYN4ysQvYoptX5YT8KdLzfGbISwZSlVfo0D3s-pDxr-C2HeV3rJhTAg14iS-KHTPDNOZtwl9aVBuA28oKilUwjDIR3RMS31GK5w2YFp4taWePcqBmNE14Az0yZNS2_cuNz-sYHypgImqiiwfyKNliXGm4oEZn5Adc8EPikJ31fTa9F3FfQPPEgSmlWpl01v-XliNtu677WtHZudyjJZKtRhTpYLl5bmi2nEBxsPc4htjqYZpABVbBHMGypUHKBQi0JY_yQ",
    },
    {
      id: 9,
      name: "Milkshakes",
      desc: "Creamy milkshakes in various flavors.",
      price: 4000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGleuyMbTdZufwXirhjxQcl1iCbodRPif4jx5AUr3UfNTIjSO_6Mcdgg6KW2-Mpmb1KVqt9ZrNwptrG4hMbkqOB5krHVz_J-AkaRIa3ZOilcBAoLZUU-IXK2vSKVu-zEN0x7PLosC7h-iXMahLzFyQGo5xpgOoe8YUFkiuaqsa7mMmY-NV2lgqTQbeKWkj1jMLInT9zvWpsuh4w8cmzmtC35_ZmpozVBnzFsE8-yKV6ANC2V3KbbMVUDYnjeS_wnVRgKntb6xWZmU",
    },
  ],
};
