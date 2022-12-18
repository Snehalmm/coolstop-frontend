import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brandFilter: [],
    priceFilter: {},
    acTechnologyFilter: [],
    acTypeFilter: [],
    acFeatureFilter: [],
    powerCunsumptionFilter: [],
    starRatingFilter: [],
    tonnageFilter: [],
    roomSizeFilter: [],
    commonFilter: [],
    sortFilter: [],
  },
  reducers: {
    addBrandFilter(state, action) {
      state.brandFilter = [...state.brandFilter, action.payload];
    },
    removeBrandFilter(state, action) {
      state.brandFilter = [
        ...state.brandFilter.filter((e) => e !== action.payload),
      ];
    },

    addsort(state, action) {
      state.sortFilter = [action.payload];
    },
    removesort(state, action) {
      state.sortFilter = [state.sortFilter.filter((e) => e !== action.payload)];
    },
    replaceSortFilter(state, action) {
      state.sortFilter = [action.payload];
    },
    deleteSort(state, action) {
      state.sortFilter = [];
    },

    replaceBrandFilter(state, action) {
      state.brandFilter = [...action.payload];
    },
    deleteBrandFilter(state, action) {
      state.brandFilter = [];
    },
    addPriceRangeFilter(state, action) {
      state.priceFilter = { min: action.payload.min, max: action.payload.max };
    },
    replacepriceFilter(state, action) {
      state.priceFilter = { min: action.payload.min, max: action.payload.max };
    },
    deletepriceFilter(state, action) {
      state.priceFilter = [];
    },

    removePriceRangeFilter(state, action) {
      state.priceFilter = [];
    },

    addAcTechnologiesFilter(state, action) {
      state.acTechnologyFilter = [...state.acTechnologyFilter, action.payload];
    },
    removeAcTechnologiesFilter(state, action) {
      state.acTechnologyFilter = [
        ...state.acTechnologyFilter.filter((e) => e !== action.payload),
      ];
    },
    replaceactechnoFilter(state, action) {
      state.acTechnologyFilter = [...action.payload];
    },
    deleteactechnoFilter(state, action) {
      state.acTechnologyFilter = [];
    },

    addAcTypeFilter(state, action) {
      state.acTypeFilter = [...state.acTypeFilter, action.payload];
    },
    removeAcTypeFilter(state, action) {
      state.acTypeFilter = [
        ...state.acTypeFilter.filter((e) => e !== action.payload),
      ];
    },

    replaceactypeFilter(state, action) {
      state.acTypeFilter = [...action.payload];
    },
    deleteactypeFilter(state, action) {
      state.acTypeFilter = [];
    },
    addAcFeatureFilter(state, action) {
      state.acFeatureFilter = [...state.acFeatureFilter, action.payload];
    },
    removeAcFeatureFilter(state, action) {
      state.acFeatureFilter = [
        ...state.acFeatureFilter.filter((e) => e !== action.payload),
      ];
    },
    replaceacFeatureFilter(state, action) {
      state.acFeatureFilter = [...action.payload];
    },
    deleteacFeatureFilter(state, action) {
      state.acFeatureFilter = [];
    },

    addPowerCunFilter(state, action) {
      state.powerCunsumptionFilter = [
        ...state.powerCunsumptionFilter,
        action.payload,
      ];
    },
    removePowerCunFilter(state, action) {
      state.powerCunsumptionFilter = [
        ...state.powerCunsumptionFilter.filter((e) => e !== action.payload),
      ];
    },
    replacepowerFilter(state, action) {
      state.powerCunsumptionFilter = [...action.payload];
    },
    deletepowerFilter(state, action) {
      state.powerCunsumptionFilter = [];
    },

    addStarRatingFilter(state, action) {
      state.starRatingFilter = [...state.starRatingFilter, action.payload];
    },
    removeStarRatingFilter(state, action) {
      state.starRatingFilter = [
        ...state.starRatingFilter.filter((e) => e !== action.payload),
      ];
    },
    replaceStarRatingFilter(state, action) {
      state.starRatingFilter = [...action.payload];
    },
    deleteStarRatingFilter(state, action) {
      state.starRatingFilter = [];
    },

    addTonnageFilter(state, action) {
      state.tonnageFilter = [...state.tonnageFilter, action.payload];
    },
    removeTonnageFilter(state, action) {
      state.tonnageFilter = [
        ...state.tonnageFilter.filter((e) => e !== action.payload),
      ];
    },
    replacetonnageFilter(state, action) {
      state.tonnageFilter = [...action.payload];
    },
    deletetonnageFilter(state, action) {
      state.tonnageFilter = [];
    },

    addRoomSizeFilter(state, action) {
      state.roomSizeFilter = [...state.roomSizeFilter, action.payload];
    },
    removeRoomSizeFilter(state, action) {
      state.roomSizeFilter = [
        ...state.roomSizeFilter.filter((e) => e !== action.payload),
      ];
    },

    replaceRoomSizeFilter(state, action) {
      state.roomSizeFilter = [...action.payload];
    },
    deleteRoomSizeFilter(state, action) {
      state.roomSizeFilter = [];
    },
    createCommonFilter(state, action) {
      state.commonFilter = [
        ...state.brandFilter,
        ...state.acTechnologyFilter,
        ...state.acTypeFilter,
        ...state.acFeatureFilter,
        ...state.powerCunsumptionFilter,
        ...state.starRatingFilter,
        ...state.tonnageFilter,
        ...state.roomSizeFilter,
      ];
    },
    clearFilter(state, action) {
      state.brandFilter = [];
      state.priceFilter = {};
      state.acTechnologyFilter = [];
      state.acTypeFilter = [];
      state.acFeatureFilter = [];
      state.powerCunsumptionFilter = [];
      state.starRatingFilter = [];
      state.tonnageFilter = [];
      state.roomSizeFilter = [];
      state.commonFilter = [];
      state.sortFilter = [];
    },
  },
});
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
