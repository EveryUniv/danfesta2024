import React, { useRef } from "react";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import styled from "styled-components";
import useDateTab from "../stores/useDate";
import Tab from "../components/common/Tab";

const GetTicket = () => {
  const captchaImage = "임시";

  const { selectedDateId, dates, selectDate } = useDateTab();
  const instructionCheckbox = useRef<HTMLInputElement>(null);

  const onApplyClick = () => {
    if (!instructionCheckbox.current?.checked) {
      alert("안내사항 확인 후, 숙지 여부를 체크해주세요.");
      return;
    }
  };

  return (
    <div>
      <Header title={"TICKETING"} subTitle={"2024 단페스타 단국존 티켓팅"} />
      <Banner>
        <Tab selectedId={selectedDateId} contents={dates} select={selectDate} />
      </Banner>
      <Banner>
        <DateImage src={`${selectedDateId}`} />
      </Banner>
      <Banner>
        <section>
          <SectionTitle>주의사항</SectionTitle>
          <ul>
            <li>
              * 단국대학교 죽전캠퍼스 재학생(졸업생, 휴학생 불가)만 신청할 수
              있습니다.
            </li>
            <li>
              * 이름, 학번, 학과, 전화번호를 홈페이지 가입시 전화번호를 잘못
              입력한 경우 이벤트 참여에 불이익이 발생할 수 있습니다.
            </li>
            <li>
              * 비인가 프로그램(매크로 등) 을 사용하여 비정상적인 경로로
              티켓팅을 시도한 경우, 고지없이 이벤트 참여에서 제외됩니다.
            </li>
            <li>* 신청 후 티켓 양도 및 취소는 불가능합니다.</li>
            <li>
              * 17일, 18일 양일 중복 신청 가능하며, 1인당 예매 가능한 티켓의
              개수는 각 일마다 1개입니다.
            </li>
            <li>
              * "2024년 05월 22일" 단국존 선예매 티켓팅임을 확인해주시길
              바랍니다.
            </li>
          </ul>
        </section>
        <section>
          <SectionTitle>부정 거래 관련 방침 안내</SectionTitle>
          <p>
            {
              "본 공연의 주최자인 단국대학교 55대 담다 총학생회는 <2024 DANFESTA>의 공식 예매처(단국대학교 홈페이지)가 아닌 다른 경로로 구매/취득한 티켓 중에서 매크로 등의 부정 한 방법으로 예매하거나 프리미엄 거래 사이트 및 개인 SNS 등에서 매매되는 티켓 및 팔찌를 모두 부정 거래로 간주하고, 이에 대해 엄격히 대처하고자 합니다."
            }
          </p>
        </section>
        <label>
          <input type="checkbox" ref={instructionCheckbox} />위 안내사항을 모두
          숙지하였습니다.
        </label>
        <div>
          <img src={`data:image/jpeg;charset=utf-8;base64,${captchaImage}`} />
          <div>
            자동입력 방지문자<span>새로고침</span>
          </div>
        </div>
        <input placeholder="자동입력 방지문자 입력" />
        <button type="button" onClick={onApplyClick}>
          신청하기
        </button>
      </Banner>
    </div>
  );
};

export default GetTicket;

const DateImage = styled.img``;

const SectionTitle = styled.h3``;
