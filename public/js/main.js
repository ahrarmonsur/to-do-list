$(document).ready(function() {
	function TodoList() {
		this.numTasks = 0;
		this.tasks = [];
	}

	TodoList.prototype.addTask = function (desc) {
		this.numTasks++;
		this.tasks.push(desc)
	};

	TodoList.prototype.showTasks = function () {
		var report = "";
		for (var i = 0; i < this.numTasks; i++) {
			report = report + this.tasks[i] + "\n";
		}
		alert(report);
	};

	TodoList.prototype.rebuildList = function () {
		var lst = "";
		for (var i = 0; i < this.numTasks; i++) {
			lst = lst + "<li class='list-group-item' data-taskid=" + i + ">" + tdl.tasks[i] + " <a href='#' class='close' aria-hidden='true'>&times;</a></li>\n";
		}
		return lst;

	}

	TodoList.prototype.removeTask = function (ind) {
		tdl.tasks.splice(ind, 1)
		tdl.numTasks--;
	}

	var tdl = new TodoList();

	// Adds a task item
	// TO DO: add calendar deadline
	$('form[name=new-task').submit(function (event) {
		event.preventDefault();
		var task = $("input[name=new-task]");
		$('#todo').append("<li class='list-group-item' data-taskid=" + tdl.numTasks + ">" + task.val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></li>");
		tdl.addTask(task.val())
		task.val("");
	});

	// Remove a Task
	$("body").on('click', '#todo a', function (event) {
		event.preventDefault();
		var task = $(this).closest("li");
		tdl.removeTask(parseInt(task.data('taskid')));
		task.closest("ul").html(tdl.rebuildList());
	});

/*	$('#datetimepicker').datetimepicker({
		format: 'dd/MM/yyyy hh:mm:ss',
		language: 'en'
	});*/

});

