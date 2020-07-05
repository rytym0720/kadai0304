
{
  document.addEventListener('DOMContentLoaded', () => {
    const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
    const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
    const addTaskValue = document.getElementsByClassName('addTask-value')[0];
   
    let nextId = 0;
    const todos = [];

    workAll.addEventListener('click', () => {
      const workAll = document.getElementById('all');
      const workNow = document.getElementById('now');
      const workComplete = document.getElementById('complete');
      if()

    //Taskとidを作成
    const addTask = (task, id, tableItem) => {
      const idSpanTd = document.createElement('td');
      const taskSpanTd = document.createElement('td');
      //タスク追加時にtodosにtodoを追加 
      const todo = {
        task: 'taskSpanTd',
        status: '作業中'
      };
      todos.push(todo);
      //要素内のHTML文章を変更する
      idSpanTd.innerText = id;
      taskSpanTd.innerText = task;
      //生成したテーブル要素をブラウザに表示する
      tableItem.append(idSpanTd);
      tableItem.append(taskSpanTd);
      addTaskTarget.append(tableItem);
    };

    //Button要素を生成する
    const addButton = (tableItem, removeButton, createButton) => {
      const createButtonTd = document.createElement('td');
      const removeButtonTd = document.createElement('td');
      //要素内のHTML文章を変更する
      createButton.innerText = '作業中';
      removeButton.innerText = '削除';
      //生成したテーブル要素をブラウザに表示する
      tableItem.append(createButtonTd);
      tableItem.append(removeButtonTd);
      addTaskTarget.append(tableItem);
      //生成したbutton要素を生成する
      createButtonTd.append(createButton);
      removeButtonTd.append(removeButton);
    };

    //追加ボタンをクリックした際にtd要素を追加する処理を行う
    addTaskTrigger.addEventListener('click', () => {
      const task = addTaskValue.value;
      const tableItem = document.createElement('tr');
      const removeButton = document.createElement('button');
      const createButton = document.createElement('button');
      addTask(task, nextId++, tableItem);
      addButton(tableItem, removeButton, createButton);
      addTaskValue.value = '';
      // //削除ボタンを押した時にタスクを削除する
      const deleteElement = (a) => {
        const tableTag =a.target.closest('tr');
        if (tableTag) tableTag.remove();
        updateId();
      }
      removeButton.addEventListener('click', deleteElement, false);

      //ボタンを押したら作業中、完了中と変わる
      createButton.addEventListener('click', () => {
        if (createButton.textContent === "作業中") {
          createButton.textContent = "完了";
        } else {
          createButton.textContent = "作業中";
        }
      });
    })

    //連番振り直し
    const updateId = () => {
      const tbody = document.getElementsByTagName("tbody")[0];
      const taskList = tbody.getElementsByTagName('tr');
      nextId = 0;
      Array.from(taskList, tr => {
        tr.getElementsByTagName('td')[0].textContent = nextId;
        nextId++
      });
    }
  });
}