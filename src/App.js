import { observable, computed } from "mobx";
import { inject, observer } from "mobx-react";

class ConditionStore {
  @observable isSwitched = false; //выключатель выкл
  @observable isWindow = false; //закрыто
  @observable isElectric = true; //ток есть
  @observable isCentral = true; //цент блок включен

  @computed get isEnabled() {
    return (
      this.isSwitched && !this.isWindow && this.isElectric && this.isCentral
    );
  }
}

const Status = (props) => {
  return props.isOn ? "on" : "off";
};

const App = inject("$condition")(
  observer((props) => {
    const { $condition } = props;

    return (
      <main>
        <p>
          Состояние кондея <Status isOn={$condition.isEnabled} />
        </p>
        <p>Работает только когда on off on on</p>
        <button
          onClick={() => ($condition.isSwitched = !$condition.isSwitched)}
        >
          Включатель <Status isOn={$condition.isSwitched} />
        </button>
        <button onClick={() => ($condition.isWindow = !$condition.isWindow)}>
          Окно <Status isOn={$condition.isWindow} />
        </button>
        <button
          onClick={() => ($condition.isElectric = !$condition.isElectric)}
        >
          Электричество <Status isOn={$condition.isElectric} />
        </button>
        <button onClick={() => ($condition.isCentral = !$condition.isCentral)}>
          Центральный <Status isOn={$condition.isCentral} />
        </button>
      </main>
    );
  })
);
export { ConditionStore, App };
