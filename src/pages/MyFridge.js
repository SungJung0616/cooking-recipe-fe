import React, { useEffect, useState } from "react";
import "../style/myFridge.style.css";
import SearchBox from "../component/Navbar/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/ingredientSlice";
import MyFridgeSearchResults from "../component/MyFridgeSearchResults/MyFridgeSearchResults";
import SearchResultCard from "../component/SearchResultCard/SearchResultCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchFridgeItems, fridgeIngredientRecipeResult } from "../redux/fridgeSlice";
import FridgeItemCard from "../component/FridgeItemCard/FridgeItemCard";

const MyFridge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredient = useSelector(
    (state) => state.ingredients.ingredients || []
  );
  const fridgeItems = useSelector((state) => state.fridge.fridgeItems || []);
  const [query, setQuery] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState({
    page: query.get("page") || 1,
    name: query.get("name") || "",
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  useEffect(() => {
    if (searchQuery.name) {
      dispatch(fetchIngredients(searchQuery));
      dispatch(fridgeIngredientRecipeResult(searchQuery));
      setHasSearched(true);
    }
  }, [dispatch, searchQuery]);

  useEffect(() => {
    dispatch(fetchFridgeItems());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const newSearchQuery = { ...searchQuery, name: e.target.value };
    setSearchQuery(newSearchQuery);
    if (e.target.value) {
      setQuery({ name: e.target.value });
    } else {
      navigate("/fridge");
      setHasSearched(false);
    }
  };

  const handleCheckboxChange = (name) => {
    setCheckedItems((prev) => {
      const newCheckedItems = new Set(prev);
      if (newCheckedItems.has(name)) {
        newCheckedItems.delete(name);
      } else {
        newCheckedItems.add(name);
      }
      return newCheckedItems;
    });
  };



  console.log("fridgeItems", fridgeItems);
  console.log("checkedItems", checkedItems);

  return (
    <>
      <div className="fridge-container">
        <div className="fridge-title">
          <h2>My 냉장고</h2>
          <p>나만의 냉장고에 재료를 추가하고 최적의 레시피를 추천해드려요</p>
        </div>

        {fridgeItems.length === 0 ? (
          <div className="fridge">
            <div className="fridge-empty-message">
              <p>냉장고가 텅 비워져 있습니다 😅 <br/>My 냉장고를 가득 채워주세요. </p>
            </div>
          </div>
        ) : (
          <div className="fridge">
            {fridgeItems.map((item) => (
              <FridgeItemCard
                key={item.ingredientId._id}
                item={item.ingredientId}
                id={item._id}
                isChecked={checkedItems.has(item.ingredientId.name)}
                onCheckboxChange={() => handleCheckboxChange(item.ingredientId.name)}
              />
            ))}
          </div>
        )}
        <div>
          <MyFridgeSearchResults />
        </div>
        <div className="fridge-ingredient-search">
          <div className="search-layout">
            <p className="title">원하시는 식재료를 검색해주세요</p>
            <SearchBox
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onCheckEnter={handleSearchChange}
              placeholder="냉장고 속 재료 검색"
              field="name"
              page="fridge"
            />
          </div>
          {hasSearched && (
            <div className="fridge-search-result">
              {ingredient.length === 0 ? (
                <p>일치하는 재료가 없습니다.</p>
              ) : (
                ingredient.map((item) => (
                  <SearchResultCard key={item._id} item={item} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyFridge;
