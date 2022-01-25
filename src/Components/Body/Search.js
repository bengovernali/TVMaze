import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";

import SubmitButton from "../StyledComponents/SubmitButton";

function Search() {
  const [searchTerm, updateSearchTerm] = useState("");
  const [shows, setShows] = useState([]);
  const [loaded, toggleLoaded] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  //check if user is logged in, if not, redirect to login page
  useEffect(() => {
    return !user.username && location.pathname !== '/' ? navigate('/') : null
  }, [location, navigate, user])

  const handleSubmit = () => {
    setShows([])
    toggleLoaded(false)
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((res) => {
        setShows(res.data);
        toggleLoaded(true)
      });
  };

  return (
    <PageWrapper>
      <PageTitle>SHOWS</PageTitle>
      <SearchBar
        placeholder="Search for a show"
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      {loaded ? (
        <ContentWrapper>
          {!!shows[0]
            ? shows.map((show) => {
                return (
                  <ShowCard key={show.show.id}>
                    <CardTitle>{show.show.name}</CardTitle>
                    { !!show.show.image ? <img src={show.show.image.medium} alt={`${show.show.name} poster`}/> : null}
                    {user.role === "admin" ? (
                      <>
                        <InfoItem>{`Premiered: ${show.show.premiered}`}</InfoItem>
                        <InfoItem>{`Ended: ${show.show.ended}`}</InfoItem>
                        <InfoItem>{`Rating: ${show.show.rating.average}`}</InfoItem>
                      </>
                    ) : null}
                  </ShowCard>
                );
              })
            : null}
        </ContentWrapper>
      ) : null}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: calc(100% - 105px);
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
  overflow-y: auto;
`;

const PageTitle = styled.h1`
  text-align: cneter;
  color: #000000;
`;

const SearchBar = styled.input`
  width: 200px;
  height: 2rem;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ShowCard = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background: #ffffff;
  box-sizing: border-box;
  padding: 0 10px 10px 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  margin: 10px;
`;

const CardTitle = styled.h3`
  text-align: center;
`;

const InfoItem = styled.p``;

export default Search;
